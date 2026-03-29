export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.toLowerCase();

    // BLOCK known malicious paths — return 404
    const BLOCKED = ['wp-admin','wp-login','wp-content','wp-includes','xmlrpc.php','phpmyadmin','pma','.env','.git','.htaccess','.htpasswd'];
    if (BLOCKED.some(b => path.startsWith('/' + b))) {
      return new Response('Not Found', { 
        status: 404,
        headers: { 
          'Cache-Control': 'no-store',
          'Content-Type': 'text/plain'
        }
      });
    }

    // CACHE — check edge cache first
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    // FETCH from origin
    const response = await env.ASSETS.fetch(request);

    // Only cache successful GET responses  
    if (request.method === 'GET' && response.status === 200) {
      const resp = new Response(response.body, response);
      
      // Add cache headers if not already set
      if (!resp.headers.has('Cache-Control')) {
        const ct = resp.headers.get('Content-Type') || '';
        if (ct.includes('text/html')) {
          resp.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=3600');
        } else if (ct.includes('image/')) {
          resp.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
        } else if (ct.includes('application/json')) {
          resp.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
        }
      }
      
      ctx.waitUntil(cache.put(cacheKey, resp.clone()));
      return resp;
    }

    return response;
  }
};
