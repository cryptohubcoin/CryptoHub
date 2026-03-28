// ============================================
// functions/api/crypto.js - Crypto Prices API
// ============================================

export async function onRequestGet(context) {
  const { request, env } = context;
  
  try {
    // Check KV cache first
    const cacheKey = 'crypto:data';
    let cached = null;
    
    if (env.CACHE_KV) {
      try {
        cached = await env.CACHE_KV.get(cacheKey, 'json');
      } catch (e) {
        // KV error, continue without cache
      }
    }

    // Return cached if fresh (less than 5 seconds old)
    if (cached && (Date.now() - cached.timestamp) < 5000) {
      return new Response(JSON.stringify(cached.data), {
        headers: {
          'Content-Type': 'application/json',
          'X-Cache': 'HIT',
          'Cache-Control': 'public, max-age=5, stale-while-revalidate=10',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Fetch from CoinGecko
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
      {
        headers: {
          'Accept': 'application/json',
        },
        cf: {
          cacheTtl: 10,
          cacheEverything: true
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();

    // Store in KV
    if (env.CACHE_KV) {
      try {
        await env.CACHE_KV.put(cacheKey, JSON.stringify({
          data: data,
          timestamp: Date.now()
        }), { expirationTtl: 60 });
      } catch (e) {
        // KV write failed, continue
      }
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'X-Cache': 'MISS',
        'Cache-Control': 'public, max-age=5, stale-while-revalidate=10',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Crypto API Error:', error);
    
    // Try to return stale cache if available
    if (env.CACHE_KV) {
      try {
        const stale = await env.CACHE_KV.get('crypto:data', 'json');
        if (stale) {
          return new Response(JSON.stringify(stale.data), {
            headers: {
              'Content-Type': 'application/json',
              'X-Cache': 'STALE',
              'Cache-Control': 'public, max-age=5',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
      } catch (e) {
        // No stale cache
      }
    }

    return new Response(JSON.stringify({ 
      error: 'Failed to fetch crypto data',
      message: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }
}

// Handle OPTIONS for CORS
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}
