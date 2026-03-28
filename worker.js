// ============================================
// _worker.js - Cloudflare Pages Main Worker
// ============================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();

    try {
      // 1. BLOCK SUSPICIOUS PATHS (الأولوية القصوى)
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
          headers: { 
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-store'
          }
        });
      }

      // 2. Block bad bots
      const userAgent = request.headers.get('User-Agent') || '';
      const isBadBot = /(bot|crawler|spider|scrape|scan|attack)/i.test(userAgent) && 
                       !/(googlebot|bingbot|slurp|duckduckbot)/i.test(userAgent);

      if (isBadBot) {
        return new Response('Forbidden', {
          status: 403,
          headers: { 'Cache-Control': 'no-store' }
        });
      }

      // 3. Rate Limiting
      const rateLimit = await checkRateLimit(request, env);
      if (!rateLimit.allowed) {
        return new Response('Too Many Requests', {
          status: 429,
          headers: {
            'Content-Type': 'text/plain',
            'Retry-After': rateLimit.retryAfter.toString(),
            'Cache-Control': 'no-store'
          }
        });
      }

      // 4. Try cache first
      const cache = caches.default;
      const cachedResponse = await cache.match(request);
      
      if (cachedResponse && request.method === 'GET') {
        const headers = new Headers(cachedResponse.headers);
        headers.set('X-Cache', 'HIT');
        headers.set('X-Response-Time', `${Date.now() - startTime}ms`);
        return new Response(cachedResponse.body, { 
          status: cachedResponse.status,
          headers: headers 
        });
      }

      // 5. Fetch from origin
      let response = await env.ASSETS.fetch(request);

      // 6. Apply cache strategy
      const strategy = getCacheStrategy(url.pathname);
      response = applyCacheStrategy(response, strategy);

      // 7. Store in cache
      if (request.method === 'GET' && response.status === 200) {
        ctx.waitUntil(cache.put(request, response.clone()));
      }

      // 8. Add headers
      const headers = new Headers(response.headers);
      headers.set('X-Cache', 'MISS');
      headers.set('X-Response-Time', `${Date.now() - startTime}ms`);

      return new Response(response.body, { 
        status: response.status,
        headers: headers 
      });

    } catch (error) {
      console.error('Worker Error:', error);
      return new Response('Internal Server Error', { 
        status: 500,
        headers: { 'Cache-Control': 'no-store' }
      });
    }
  }
};

// Rate Limiting
async function checkRateLimit(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = `rate:${ip}`;
  
  if (env.CACHE_KV) {
    try {
      const current = await env.CACHE_KV.get(key);
      const count = current ? parseInt(current) : 0;
      
      if (count > 100) {
        return { allowed: false, retryAfter: 60 };
      }
      
      await env.CACHE_KV.put(key, (count + 1).toString(), { expirationTtl: 60 });
    } catch (e) {}
  }
  
  return { allowed: true };
}

// Cache Strategy
function getCacheStrategy(pathname) {
  if (pathname.match(/\.(js|css|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|ico)$/)) {
    return { maxAge: 31536000, immutable: true };
  }
  if (pathname.startsWith('/api/')) {
    return { maxAge: 5, staleWhileRevalidate: 10 };
  }
  if (pathname.match(/\.(html|htm)$/) || pathname === '/') {
    return { maxAge: 120, staleWhileRevalidate: 300 };
  }
  return { maxAge: 300, staleWhileRevalidate: 600 };
}

function applyCacheStrategy(response, strategy) {
  const headers = new Headers(response.headers);
  let cacheControl = `public, max-age=${strategy.maxAge}`;
  
  if (strategy.immutable) cacheControl += ', immutable';
  if (strategy.staleWhileRevalidate) cacheControl += `, stale-while-revalidate=${strategy.staleWhileRevalidate}`;
  
  headers.set('Cache-Control', cacheControl);
  headers.set('Vary', 'Accept-Encoding');
  
  return new Response(response.body, { 
    status: response.status,
    statusText: response.statusText,
    headers: headers 
  });
}
