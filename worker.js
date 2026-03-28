export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // BLOCK BAD PATHS
    if (url.pathname.includes('wp-admin') || 
        url.pathname.includes('wp-login') ||
        url.pathname.includes('.env') ||
        url.pathname.includes('.git') ||
        url.pathname.includes('xmlrpc.php') ||
        url.pathname.includes('wp-content') ||
        url.pathname.includes('wp-includes') ||
        url.pathname.includes('admin') ||
        url.pathname.includes('phpmyadmin')) {
      return new Response('Not Found', { 
        status: 404,
        headers: { 'Cache-Control': 'no-store' }
      });
    }

    // CACHE
    const cache = caches.default;
    const cached = await cache.match(request);
    if (cached) return cached;

    // FETCH
    const response = await env.ASSETS.fetch(request);
    
    if (request.method === 'GET' && response.status === 200) {
      ctx.waitUntil(cache.put(request, response.clone()));
    }

    return response;
  }
};
