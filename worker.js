const CG = 'https://api.coingecko.com/api/v3';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;

    // ── Only intercept /api/* routes — everything else goes to static assets ──
    if (!p.startsWith('/api/')) {
      // Block known bot paths with cached 403
      const lp = p.toLowerCase();
      if (lp.includes('wp-admin') || lp.includes('wp-login') || lp.includes('wp-content') ||
          lp.includes('xmlrpc') || lp.includes('phpmyadmin') || lp.includes('.env') || lp.includes('.git')) {
        return new Response('', { status: 403, headers: { 'Cache-Control': 'public, max-age=86400' } });
      }
      return env.ASSETS.fetch(request);
    }

    // ── CORS preflight ──
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'GET') return jr({ error: 'Method not allowed' }, 405);

    // ── API routes ──
    try {
      if (p === '/api/nfts' || p === '/api/nfts/') return await handleNFTsFast(env, ctx);
      if (p === '/api/enrich') return await handleEnrich(env, ctx);
      if (p.startsWith('/api/nft/')) return await handleOne(p.replace('/api/nft/', '').replace(/\/$/, ''), env);
      if (p === '/api/stats') return await handleStats(env);
      if (p === '/api/health') return jr({ status: 'ok', ts: Date.now() });
      if (p === '/api/reset') { await kvDel(env, 'master'); await kvDel(env, 'enriched'); return jr({ status: 'cache cleared' }); }
      return jr({ error: 'Not found', path: p }, 404);
    } catch (e) {
      console.error('Worker error:', e.message);
      return jr({ error: 'Internal error' }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(enrichBatch(env, 10));
  }
};

// FAST — returns cached data, triggers small background enrich
async function handleNFTsFast(env, ctx) {
  let master = await kvGet(env, 'master');
  if (!master || !master.ids?.length) {
    master = { ids: [], ts: 0 };
    ctx.waitUntil(fetchMasterListSafe(env));
  }
  let enriched = await kvGet(env, 'enriched') || [];
  // Only enrich if less than half done — small batch (5) to avoid timeout
  if (master.ids?.length > 0 && enriched.length < master.ids.length * 0.5) {
    ctx.waitUntil(enrichBatch(env, 5));
  }
  return jr({
    total: enriched.length,
    total_known: master?.ids?.length || 0,
    progress: master?.ids?.length ? Math.round((enriched.length / master.ids.length) * 100) + '%' : '0%',
    data: enriched.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0)),
    _ts: Date.now()
  }, 200, 'public, max-age=60, stale-while-revalidate=300');
}

async function handleEnrich(env, ctx) {
  ctx.waitUntil(enrichBatch(env, 8));
  const enriched = await kvGet(env, 'enriched') || [];
  return jr({ status: 'enriching', current: enriched.length });
}

async function fetchMasterListSafe(env) {
  try { await fetchMasterList(env); } catch (e) { console.error('Master list err:', e.message); }
}

async function fetchMasterList(env) {
  const allIds = [];
  for (let page = 1; page <= 4; page++) {
    try {
      const r = await fetch(CG + '/nfts/list?per_page=250&page=' + page, {
        headers: { 'User-Agent': 'CryptoHub/1.0', 'Accept': 'application/json' }
      });
      if (r.status === 429) { await sleep(3000); continue; }
      if (!r.ok) break;
      const data = await r.json();
      if (!Array.isArray(data) || data.length === 0) break;
      data.forEach(n => allIds.push({ id: n.id, name: n.name || '', chain: n.asset_platform_id || 'ethereum' }));
      await sleep(2500);
    } catch (e) { break; }
  }
  if (allIds.length > 0) {
    await kvPut(env, 'master', { ids: allIds, ts: Date.now() }, 7200);
  }
}

async function enrichBatch(env, size) {
  try {
    let master = await kvGet(env, 'master');
    if (!master?.ids?.length) return;
    let enriched = await kvGet(env, 'enriched') || [];
    const done = new Set(enriched.map(n => n.id));
    const priority = ['bored-ape-yacht-club','cryptopunks','mutant-ape-yacht-club','pudgy-penguins','azuki','milady-maker','doodles-official','degods','mad-lads','autoglyphs','cool-cats-nft','moonbirds','clone-x-x-takashi-murakami','meebits','world-of-women-nft','nouns','lil-pudgys','beanz-official','invisible-friends','nakamigos','mfers','okay-bears','claynosaurz','nodemonkes','bitcoin-puppets','quantum-cats','bitcoin-frogs','runestones'];
    const pending = master.ids.filter(n => !done.has(n.id)).sort((a, b) => {
      const ai = priority.indexOf(a.id), bi = priority.indexOf(b.id);
      if (ai >= 0 && bi >= 0) return ai - bi;
      if (ai >= 0) return -1;
      if (bi >= 0) return 1;
      return 0;
    });
    if (pending.length === 0) {
      // Refresh 2 stale entries
      enriched.sort((a, b) => (a._ts || 0) - (b._ts || 0));
      const stale = enriched.slice(0, 2);
      const res = await Promise.allSettled(stale.map(n => fetchDetail(n.id)));
      res.forEach(r => {
        if (r.status === 'fulfilled' && r.value) {
          const idx = enriched.findIndex(x => x.id === r.value.id);
          if (idx >= 0) enriched[idx] = r.value;
        }
      });
      await kvPut(env, 'enriched', enriched, 14400);
      return;
    }
    const batch = pending.slice(0, size);
    for (let i = 0; i < batch.length; i += 2) {
      const chunk = batch.slice(i, i + 2);
      const res = await Promise.allSettled(chunk.map(n => fetchDetail(n.id)));
      res.forEach(r => { if (r.status === 'fulfilled' && r.value) enriched.push(r.value); });
      if (i + 2 < batch.length) await sleep(2500);
    }
    await kvPut(env, 'enriched', enriched, 14400);
  } catch (e) { console.error('enrichBatch err:', e.message); }
}

async function fetchDetail(id) {
  try {
    const r = await fetch(CG + '/nfts/' + encodeURIComponent(id), {
      headers: { 'User-Agent': 'CryptoHub/1.0', 'Accept': 'application/json' }
    });
    if (r.status === 429 || !r.ok) return null;
    const d = await r.json();
    return {
      id: d.id || id, name: d.name || '', symbol: (d.symbol || '').toUpperCase(),
      image: d.image?.small || d.image?.thumb || '', chain: d.asset_platform_id || 'ethereum',
      floor_price: { native: d.floor_price?.native_currency || 0, usd: d.floor_price?.usd || 0, symbol: (d.native_currency_symbol || 'ETH').toUpperCase() },
      changes: { h24: d.floor_price_24h_percentage_change?.usd || 0, h7d: d.floor_price_7d_percentage_change?.usd || 0, h30d: d.floor_price_30d_percentage_change?.usd || 0 },
      market_cap: d.market_cap?.usd || 0, volume_24h: d.volume_24h?.usd || 0,
      owners: d.number_of_unique_addresses || 0, total_supply: d.total_supply || 0, _ts: Date.now()
    };
  } catch (e) { return null; }
}

async function handleOne(id, env) {
  if (!id) return jr({ error: 'ID required' }, 400);
  const enriched = await kvGet(env, 'enriched') || [];
  const cached = enriched.find(n => n.id === id);
  if (cached) return jr({ data: cached, _cached: true }, 200, 'public, max-age=300');
  const data = await fetchDetail(id);
  if (!data) return jr({ error: 'Not found' }, 404);
  return jr({ data, _cached: false });
}

async function handleStats(env) {
  const master = await kvGet(env, 'master');
  const enriched = await kvGet(env, 'enriched') || [];
  const total = master?.ids?.length || 0;
  const chains = {};
  enriched.forEach(n => { chains[n.chain || 'unknown'] = (chains[n.chain || 'unknown'] || 0) + 1; });
  return jr({ total_in_market: total, total_enriched: enriched.length, remaining: total - enriched.length, progress: total ? Math.round((enriched.length / total) * 100) + '%' : '0%', chains, master_updated: master?.ts ? new Date(master.ts).toISOString() : null }, 200, 'public, max-age=60');
}

async function kvGet(env, key) { if (!env.NFT_CACHE) return null; try { return await env.NFT_CACHE.get('nft:' + key, 'json'); } catch { return null; } }
async function kvPut(env, key, val, ttl) { if (!env.NFT_CACHE) return; try { await env.NFT_CACHE.put('nft:' + key, JSON.stringify(val), { expirationTtl: ttl || 3600 }); } catch {} }
async function kvDel(env, key) { if (!env.NFT_CACHE) return; try { await env.NFT_CACHE.delete('nft:' + key); } catch {} }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function jr(data, s, cc) {
  const h = { 'Content-Type': 'application/json', ...CORS };
  if (cc) h['Cache-Control'] = cc;
  return new Response(JSON.stringify(data), { status: s || 200, headers: h });
}
