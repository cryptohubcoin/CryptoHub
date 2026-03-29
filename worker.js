/**
 * CryptoHub NFT Worker v2.0
 * Optimized with Edge Caching & Better Error Handling
 */

const CG = 'https://api.coingecko.com/api/v3';
const CACHE_TTL = 300; // 5 minutes

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    const start = Date.now();
    const url = new URL(request.url);
    
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }
    
    if (request.method !== 'GET') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    const path = url.pathname;
    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;

    // Try Cloudflare Edge Cache first
    const cached = await cache.match(cacheKey);
    if (cached) {
      return addMetrics(cached, 'HIT', Date.now() - start);
    }

    let response;
    try {
      switch (path) {
        case '/api/nfts':
        case '/api/nfts/':
          response = await handleNFTsFast(env, ctx);
          break;
        case '/api/enrich':
          response = await handleEnrich(env, ctx);
          break;
        case '/api/stats':
          response = await handleStats(env);
          break;
        case '/api/health':
          response = jsonResponse({ status: 'ok', ts: Date.now() });
          break;
        case '/api/reset':
          await kvDel(env, 'master');
          await kvDel(env, 'enriched');
          response = jsonResponse({ status: 'cache cleared' });
          break;
        default:
          if (path.startsWith('/api/nft/')) {
            const id = path.replace('/api/nft/', '').replace(/\/$/, '');
            response = await handleOne(id, env);
          } else {
            response = jsonResponse({ error: 'Not found' }, 404);
          }
      }
    } catch (e) {
      response = jsonResponse({ error: e.message }, 500);
    }

    // Store in Edge Cache (background)
    if (response.status === 200) {
      ctx.waitUntil(
        cache.put(cacheKey, response.clone())
      );
    }

    return addMetrics(response, 'MISS', Date.now() - start);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(enrichBatch(env, 10)); // Reduced from 20
  }
};

// ═══════════════════════════════════════
// Handlers
// ═══════════════════════════════════════

async function handleNFTsFast(env, ctx) {
  // Try to get from KV first (fast)
  let [master, enriched] = await Promise.all([
    kvGet(env, 'master'),
    kvGet(env, 'enriched')
  ]);

  enriched = enriched || [];

  // If no master, fetch in background
  if (!master?.ids?.length) {
    ctx.waitUntil(fetchMasterList(env));
    return jsonResponse({
      total: enriched.length,
      total_known: 0,
      progress: '0%',
      data: enriched.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0)),
      _ts: Date.now(),
      _note: 'Loading master list...'
    });
  }

  // Trigger enrichment in background
  ctx.waitUntil(enrichBatch(env, 5)); // Reduced batch size

  return jsonResponse({
    total: enriched.length,
    total_known: master.ids.length,
    progress: Math.round((enriched.length / master.ids.length) * 100) + '%',
    data: enriched.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0)),
    _ts: Date.now()
  });
}

async function handleEnrich(env, ctx) {
  ctx.waitUntil(enrichBatch(env, 10));
  const enriched = await kvGet(env, 'enriched') || [];
  return jsonResponse({ status: 'enriching', current: enriched.length });
}

async function handleOne(id, env) {
  if (!id) return jsonResponse({ error: 'ID required' }, 400);
  
  const enriched = await kvGet(env, 'enriched') || [];
  const cached = enriched.find(n => n.id === id);
  
  if (cached) {
    return jsonResponse({ data: cached, _cached: true, _source: 'kv' });
  }

  const data = await fetchDetail(id);
  if (!data) return jsonResponse({ error: 'Not found' }, 404);
  
  return jsonResponse({ data, _cached: false });
}

async function handleStats(env) {
  const [master, enriched] = await Promise.all([
    kvGet(env, 'master'),
    kvGet(env, 'enriched')
  ]);

  const total = master?.ids?.length || 0;
  const chains = {};

  (enriched || []).forEach(n => {
    const chain = n.chain || 'unknown';
    chains[chain] = (chains[chain] || 0) + 1;
  });

  return jsonResponse({
    total_in_market: total,
    total_enriched: enriched?.length || 0,
    remaining: total - (enriched?.length || 0),
    progress: total ? Math.round(((enriched?.length || 0) / total) * 100) + '%' : '0%',
    chains,
    master_updated: master?.ts ? new Date(master.ts).toISOString() : null
  });
}

// ═══════════════════════════════════════
// Data Fetching (Optimized)
// ═══════════════════════════════════════

async function fetchMasterList(env) {
  const allIds = [];
  
  // Reduced from 8 to 4 pages (1000 NFTs max)
  for (let page = 1; page <= 4; page++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const r = await fetch(`${CG}/nfts/list?per_page=250&page=${page}`, {
        headers: { 
          'User-Agent': 'CryptoHub/1.0', 
          'Accept': 'application/json' 
        },
        signal: controller.signal
      });
      
      clearTimeout(timeout);

      if (r.status === 429) {
        await sleep(5000); // Wait longer for rate limit
        continue;
      }
      
      if (!r.ok) break;
      
      const data = await r.json();
      if (!Array.isArray(data) || data.length === 0) break;
      
      data.forEach(n => {
        allIds.push({
          id: n.id,
          name: n.name || '',
          chain: n.asset_platform_id || 'ethereum'
        });
      });

      // Shorter delay
      if (page < 4) await sleep(1000); // Reduced from 2000ms

    } catch (e) {
      console.error(`Page ${page} error:`, e.message);
      break;
    }
  }

  const master = { ids: allIds, ts: Date.now() };
  await kvPut(env, 'master', master, 7200); // 2 hours TTL
  return master;
}

async function enrichBatch(env, size) {
  let [master, enriched] = await Promise.all([
    kvGet(env, 'master'),
    kvGet(env, 'enriched')
  ]);

  if (!master?.ids?.length) {
    master = await fetchMasterList(env);
  }
  
  if (!master?.ids?.length) return;

  enriched = enriched || [];
  const done = new Set(enriched.map(n => n.id));
  
  // Priority list (top collections only)
  const priority = [
    'bored-ape-yacht-club', 'cryptopunks', 'mutant-ape-yacht-club',
    'pudgy-penguins', 'azuki', 'milady-maker', 'doodles-official',
    'degods', 'mad-lads', 'cool-cats-nft'
  ];
  
  const pending = master.ids
    .filter(n => !done.has(n.id))
    .sort((a, b) => {
      const ai = priority.indexOf(a.id);
      const bi = priority.indexOf(b.id);
      if (ai >= 0 && bi >= 0) return ai - bi;
      if (ai >= 0) return -1;
      if (bi >= 0) return 1;
      return 0;
    });

  // If all done, refresh stale data
  if (pending.length === 0) {
    enriched.sort((a, b) => (a._ts || 0) - (b._ts || 0));
    const stale = enriched.slice(0, 3); // Reduced from 5
    
    for (const item of stale) {
      const data = await fetchDetail(item.id);
      if (data) {
        const idx = enriched.findIndex(x => x.id === data.id);
        if (idx >= 0) enriched[idx] = data;
      }
      await sleep(1500); // Reduced from 2200ms
    }
    
    await kvPut(env, 'enriched', enriched, 14400);
    return;
  }

  // Process batch
  const batch = pending.slice(0, size);
  
  for (const item of batch) {
    const data = await fetchDetail(item.id);
    if (data) enriched.push(data);
    await sleep(1500); // Sequential with delay
  }

  await kvPut(env, 'enriched', enriched, 14400);
}

async function fetchDetail(id) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const r = await fetch(`${CG}/nfts/${encodeURIComponent(id)}`, {
      headers: { 
        'User-Agent': 'CryptoHub/1.0', 
        'Accept': 'application/json' 
      },
      signal: controller.signal
    });
    
    clearTimeout(timeout);

    if (r.status === 429) {
      console.log(`Rate limit hit for ${id}`);
      return null;
    }
    
    if (!r.ok) return null;

    const d = await r.json();
    
    return {
      id: d.id || id,
      name: d.name || '',
      symbol: (d.symbol || '').toUpperCase(),
      image: d.image?.small || d.image?.thumb || '',
      chain: d.asset_platform_id || 'ethereum',
      floor_price: {
        native: d.floor_price?.native_currency || 0,
        usd: d.floor_price?.usd || 0,
        symbol: (d.native_currency_symbol || 'ETH').toUpperCase()
      },
      changes: {
        h24: d.floor_price_24h_percentage_change?.usd || 0,
        h7d: d.floor_price_7d_percentage_change?.usd || 0,
        h30d: d.floor_price_30d_percentage_change?.usd || 0
      },
      market_cap: d.market_cap?.usd || 0,
      volume_24h: d.volume_24h?.usd || 0,
      owners: d.number_of_unique_addresses || 0,
      total_supply: d.total_supply || 0,
      _ts: Date.now()
    };
    
  } catch (e) {
    console.error(`Fetch detail error for ${id}:`, e.message);
    return null;
  }
}

// ═══════════════════════════════════════
// Helpers
// ═══════════════════════════════════════

async function kvGet(env, key) {
  if (!env.NFT_CACHE) return null;
  try {
    return await env.NFT_CACHE.get(`nft:${key}`, 'json');
  } catch (e) {
    console.error('KV get error:', e.message);
    return null;
  }
}

async function kvPut(env, key, val, ttl) {
  if (!env.NFT_CACHE) return;
  try {
    await env.NFT_CACHE.put(`nft:${key}`, JSON.stringify(val), {
      expirationTtl: ttl || 3600
    });
  } catch (e) {
    console.error('KV put error:', e.message);
  }
}

async function kvDel(env, key) {
  if (!env.NFT_CACHE) return;
  try {
    await env.NFT_CACHE.delete(`nft:${key}`);
  } catch (e) {
    console.error('KV delete error:', e.message);
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS
    }
  });
}

function addMetrics(response, cacheStatus, duration) {
  const headers = new Headers(response.headers);
  headers.set('CF-Cache-Status', cacheStatus);
  headers.set('X-Worker-Cache', cacheStatus);
  headers.set('X-Response-Time', `${duration}ms`);
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
