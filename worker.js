// ============================================
// _worker.js - Cloudflare Pages Main Worker
// ============================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();

    try {
      // 1. Block bad bots and suspicious paths
      const userAgent = request.headers.get('User-Agent') || '';
      const blockedPaths = [
        '/wp-admin', '/wp-login', '/admin', '/config', 
        '/.env', '/.git', '/phpmyadmin', '/xmlrpc.php',
        '/wp-content', '/wp-includes', '/wordpress',
        '/backup', '/old', '/test', '/dev', '/staging'
      ];
      
      const isBlockedPath = blockedPaths.some(p => 
        url.pathname.toLowerCase().includes(p)
      );
      
      const isBadBot = /(bot|crawler|spider|scrape|scan)/i.test(userAgent) && 
                       !/(googlebot|bingbot|slurp)/i.test(userAgent);

      if (isBlockedPath || isBadBot) {
        return new Response('Not Found', {
          status: 404,
          headers: { 
            'Cache-Control': 'no-store',
            'Content-Type': 'text/plain'
          }
        });
      }

      // 2. Rate Limiting
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

      // 3. Try cache first
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

      // 4. Fetch from origin
      let response = await env.ASSETS.fetch(request);

      // 5. Apply cache strategy
      const strategy = getCacheStrategy(url.pathname);
      response = applyCacheStrategy(response, strategy);

      // 6. Store in cache
      if (request.method === 'GET' && response.status === 200) {
        ctx.waitUntil(cache.put(request, response.clone()));
      }

      // 7. Add headers
      const headers = new Headers(response.headers);
      headers.set('X-Cache', 'MISS');
      headers.set('X-Response-Time', `${Date.now() - startTime}ms');

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
    } catch (e) {
      // Continue if KV fails
    }
  }
  
  return { allowed: true };
}

// Cache Strategy
function getCacheStrategy(pathname) {
  // Static assets - 1 year
  if (pathname.match(/\.(js|css|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|ico)$/)) {
    return { maxAge: 31536000, immutable: true };
  }
  
  // API - 5 seconds
  if (pathname.startsWith('/api/')) {
    return { maxAge: 5, staleWhileRevalidate: 10 };
  }
  
  // HTML pages - 2 minutes
  if (pathname.match(/\.(html|htm)$/) || pathname === '/') {
    return { maxAge: 120, staleWhileRevalidate: 300 };
  }
  
  // Default - 5 minutes
  return { maxAge: 300, staleWhileRevalidate: 600 };
}

function applyCacheStrategy(response, strategy) {
  const headers = new Headers(response.headers);
  let cacheControl = `public, max-age=${strategy.maxAge}`;
  
  if (strategy.immutable) {
    cacheControl += ', immutable';
  }
  if (strategy.staleWhileRevalidate) {
    cacheControl += `, stale-while-revalidate=${strategy.staleWhileRevalidate}`;
  }
  
  headers.set('Cache-Control', cacheControl);
  headers.set('Vary', 'Accept-Encoding');
  
  return new Response(response.body, { 
    status: response.status,
    statusText: response.statusText,
    headers: headers 
  });
}
