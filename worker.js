export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const blockedPaths = [
      '/wp-admin', '/wp-login', '/wp-content', '/wp-includes', 
      '/wp-json', '/xmlrpc.php', '/wordpress',
      '/.env', '/.git', '/.htaccess', '/.htpasswd',
      '/admin', '/phpmyadmin', '/pma', '/mysql',
      '/backup', '/backups', '/old', '/test', '/dev', '/staging',
      '/config', '/configuration', '/install', '/setup'
    ];
    
    const isBlocked = blockedPaths.some(p => 
      url.pathname.toLowerCase().startsWith(p)
    );

    if (isBlocked) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'Cache-Control': 'no-store' }
      });
    }

    const cache = caches.default;
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse && request.method === 'GET') {
      return new Response(cachedResponse.body, { 
        status: cachedResponse.status,
        headers: cachedResponse.headers 
      });
    }

    let response = await env.ASSETS.fetch(request);
    
    if (request.method === 'GET' && response.status === 200) {
      ctx.waitUntil(cache.put(request, response.clone()));
    }

    return response;
  }
};
