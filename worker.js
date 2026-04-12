export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    const lp = p.toLowerCase();

    // Block bot probing
    if (lp.includes('wp-admin') || lp.includes('wp-login') || lp.includes('wp-content') ||
        lp.includes('xmlrpc') || lp.includes('phpmyadmin') || lp.includes('.env') || lp.includes('.git')) {
      return new Response('', { status: 403, headers: { 'Cache-Control': 'public, max-age=86400' } });
    }

    // API routes
    if (p.startsWith('/api/')) {
      return new Response('API route', { status: 200 });
    }

    // Fetch static asset
    const response = await env.ASSETS.fetch(request);
    const newHeaders = new Headers(response.headers);

    // Cache Headers (من _headers)
    if (p.endsWith('.css') || p.endsWith('.js')) {
      newHeaders.set('Cache-Control', 'public, max-age=3600');
      newHeaders.set('CDN-Cache-Control', 'public, max-age=7200');
    } else if (p.endsWith('.woff2') || p.endsWith('.woff') || p.endsWith('.ttf')) {
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (p.endsWith('.png') || p.endsWith('.jpg') || p.endsWith('.jpeg') || 
               p.endsWith('.svg') || p.endsWith('.webp') || p.endsWith('.ico') || p.endsWith('.gif')) {
      newHeaders.set('Cache-Control', 'public, max-age=604800');
      newHeaders.set('CDN-Cache-Control', 'public, max-age=604800');
    } else if (p.endsWith('.html') || p === '/') {
      newHeaders.set('Cache-Control', 'public, max-age=300');
      newHeaders.set('CDN-Cache-Control', 'public, max-age=3600');
    } else {
      newHeaders.set('Cache-Control', 'public, max-age=300');
    }

    // Security Headers
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
