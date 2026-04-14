export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    const lp = p.toLowerCase();

    // Block bots
    if (lp.includes('wp-admin') || lp.includes('wp-login') || lp.includes('wp-content') ||
        lp.includes('xmlrpc') || lp.includes('phpmyadmin') || lp.includes('.env') || lp.includes('.git')) {
      return new Response('', { 
        status: 403, 
        headers: { 
          'Cache-Control': 'public, max-age=86400',
          'Content-Type': 'text/plain'
        } 
      });
    }

    // API routes
    if (p.startsWith('/api/')) {
      return new Response('API', { status: 200 });
    }

    // 🎯 الحل: استخدم Cache API صح
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    
    // شوف لو فيه cache
    let response = await cache.match(cacheKey);
    
    if (response) {
      // ✅ Cache HIT - رجّع من الكاش
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
      response.headers.set('CF-Cache-Status', 'HIT');
      return response;
    }

    // ❌ Cache MISS - جيب من الـ origin
    response = await env.ASSETS.fetch(request);
    
    // انسخ الـ response عشان نعدل الـ headers
    const newHeaders = new Headers(response.headers);
    
    // حدد الـ Cache-Control حسب نوع الملف
    let maxAge = 300; // default 5 دقايق
    
    if (p.endsWith('.css') || p.endsWith('.js')) {
      maxAge = 3600; // 1 ساعة
    } else if (p.endsWith('.woff2') || p.endsWith('.woff') || p.endsWith('.ttf')) {
      maxAge = 31536000; // 1 سنة
    } else if (p.match(/\.(png|jpg|jpeg|svg|webp|ico|gif)$/)) {
      maxAge = 604800; // 7 أيام
    }
    
    newHeaders.set('Cache-Control', `public, max-age=${maxAge}`);
    newHeaders.set('CDN-Cache-Control', `public, max-age=${maxAge}`);
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('CF-Cache-Status', 'MISS');

    // اعمل response جديد
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });

    // 🎯 خزن في الكاش (باستخدام waitUntil)
    ctx.waitUntil(cache.put(cacheKey, newResponse.clone()));

    return newResponse;
  }
};
