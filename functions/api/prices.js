// ============================================
// functions/api/prices.js - Specific Coin Prices
// ============================================

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const coinId = url.searchParams.get('id') || 'bitcoin';
  
  try {
    const cacheKey = `price:${coinId}`;
    let cached = null;

    // Check KV cache
    if (env.CACHE_KV) {
      try {
        cached = await env.CACHE_KV.get(cacheKey, 'json');
      } catch (e) {}
    }

    // Return cached if fresh (less than 10 seconds)
    if (cached && (Date.now() - cached.timestamp) < 10000) {
      return new Response(JSON.stringify(cached.data), {
        headers: {
          'Content-Type': 'application/json',
          'X-Cache': 'HIT',
          'Cache-Control': 'public, max-age=10, stale-while-revalidate=30'
        }
      });
    }

    // Fetch from CoinGecko
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`,
      { cf: { cacheTtl: 10 } }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Store in KV
    if (env.CACHE_KV) {
      try {
        await env.CACHE_KV.put(cacheKey, JSON.stringify({
          data: data,
          timestamp: Date.now()
        }), { expirationTtl: 60 });
      } catch (e) {}
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'X-Cache': 'MISS',
        'Cache-Control': 'public, max-age=10, stale-while-revalidate=30'
      }
    });

  } catch (error) {
    console.error('Prices API Error:', error);
    
    // Return stale cache if available
    if (env.CACHE_KV) {
      try {
        const stale = await env.CACHE_KV.get(`price:${coinId}`, 'json');
        if (stale) {
          return new Response(JSON.stringify(stale.data), {
            headers: {
              'Content-Type': 'application/json',
              'X-Cache': 'STALE'
            }
          });
        }
      } catch (e) {}
    }

    return new Response(JSON.stringify({ 
      error: 'Failed to fetch price',
      message: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
