export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname.toLowerCase();

    // Block bots
    if (p.includes('wp-admin') || p.includes('wp-login') || p.includes('wp-content') ||
        p.includes('xmlrpc') || p.includes('phpmyadmin') || p.includes('.env') || p.includes('.git')) {
      return new Response('', { status: 403 });
    }

    // ✅ Cloudflare Edge Cache
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), { method: 'GET' });

    // Static assets — check edge cache first
    const isStatic = p.match(/\.(css|js|png|jpg|jpeg|svg|webp|ico|gif|woff|woff2|ttf)$/);

    if (isStatic) {
      const cached = await cache.match(cacheKey);
      if (cached) return cached; // ✅ رجّع من الـ Edge Cache مباشرة
    }

    // Fetch من ASSETS
    let response;
    try {
      response = await env.ASSETS.fetch(request);
    } catch (e) {
      response = await fetch(request);
    }

    const newHeaders = new Headers(response.headers);

    // Cache-Control بالـ TTL المناسب
    let ttl = 0;
    if (p.endsWith('.css') || p.endsWith('.js')) {
      ttl = 3600; // 1 ساعة
      newHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    } else if (p.match(/\.(png|jpg|jpeg|svg|webp|ico|gif|woff|woff2|ttf)$/)) {
      ttl = 604800; // 7 أيام
      newHeaders.set('Cache-Control', 'public, max-age=604800, s-maxage=604800');
    } else if (p.endsWith('.html') || p === '/') {
      ttl = 300; // 5 دقايق
      newHeaders.set('Cache-Control', 'public, max-age=300, s-maxage=300');
    }

    // Security headers
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('X-Cache-Status', 'MISS'); // للـ debugging

    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });

    // ✅ احفظ في Edge Cache لو static
    if (isStatic && ttl > 0 && response.status === 200) {
      ctx.waitUntil(cache.put(cacheKey, newResponse.clone()));
    }

    return newResponse;
  }
};
