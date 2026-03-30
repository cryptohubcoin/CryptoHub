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

    // Non-API → static assets
    if (!p.startsWith('/api/')) {
      const lp = p.toLowerCase();
      if (lp.includes('wp-admin') || lp.includes('wp-login') || lp.includes('wp-content') ||
          lp.includes('xmlrpc') || lp.includes('phpmyadmin') || lp.includes('.env') || lp.includes('.git')) {
        return new Response('', { status: 403, headers: { 'Cache-Control': 'public, max-age=86400' } });
      }
      return env.ASSETS.fetch(request);
    }

    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'GET') return jr({ error: 'Method not allowed' }, 405);

    if (!env.NFT_CACHE) {
      if (p === '/api/health') return jr({ status: 'ok', kv: false, ts: Date.now() });
      return jr({ error: 'KV not configured', fix: 'Add NFT_CACHE KV binding in Workers Settings → Variables' }, 503);
    }

    try {
      if (p === '/api/nfts' || p === '/api/nfts/') return await handleNFTs(env, ctx);
      if (p === '/api/enrich') return await handleEnrich(env, ctx);
      if (p.startsWith('/api/nft/')) return await handleOne(p.replace('/api/nft/', '').replace(/\/$/, ''), env);
      if (p === '/api/stats') return await handleStats(env);
      if (p === '/api/health') return jr({ status: 'ok', kv: true, ts: Date.now() });
      if (p === '/api/reset') { await kvDel(env, 'master'); await kvDel(env, 'enriched'); return jr({ status: 'cleared' }); }
      return jr({ error: 'Not found' }, 404);
    } catch (e) {
      console.error('API error:', p, e.message);
      return jr({ error: 'Internal error' }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    if (!env.NFT_CACHE) return;
    try {
      await enrichBatch(env, 6);
    } catch (e) {
      console.error('Cron error:', e.message);
    }
  }
};

async function handleNFTs(env, ctx) {
  let master = await kvGet(env, 'master');
  if (!master || !master.ids?.length) {
    master = { ids: [], ts: 0 };
    ctx.waitUntil(safe(() => fetchMasterList(env)));
  }
  const enriched = await kvGet(env, 'enriched') || [];
  if (master.ids.length > 0 && enriched.length < master.ids.length * 0.5) {
    ctx.waitUntil(safe(() => enrichBatch(env, 4)));
  }
  return jr({
    total: enriched.length,
    total_known: master.ids?.length || 0,
    progress: master.ids?.length ? Math.round((enriched.length / master.ids.length) * 100) + '%' : '0%',
    data: enriched.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0)),
    _ts: Date.now()
  }, 200, 60);
}

async function handleEnrich(env, ctx) {
  ctx.waitUntil(safe(() => enrichBatch(env, 6)));
  const enriched = await kvGet(env, 'enriched') || [];
  return jr({ status: 'enriching', current: enriched.length });
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
      if (!Array.isArray(data) || !data.length) break;
      data.forEach(n => allIds.push({ id: n.id, name: n.name || '', chain: n.asset_platform_id || 'ethereum' }));
      await sleep(2500);
    } catch { break; }
  }
  if (allIds.length > 0) await kvPut(env, 'master', { ids: allIds, ts: Date.now() }, 7200);
}

async function enrichBatch(env, size) {
  const master = await kvGet(env, 'master');
  if (!master?.ids?.length) return;
  const enriched = await kvGet(env, 'enriched') || [];
  const done = new Set(enriched.map(n => n.id));
  const priority = ['bored-ape-yacht-club','cryptopunks','mutant-ape-yacht-club','pudgy-penguins','azuki','milady-maker','doodles-official','degods','mad-lads','cool-cats-nft','moonbirds','meebits','nouns','lil-pudgys','okay-bears','nodemonkes','bitcoin-puppets','bitcoin-frogs','runestones'];
  const pending = master.ids.filter(n => !done.has(n.id)).sort((a, b) => {
    const ai = priority.indexOf(a.id), bi = priority.indexOf(b.id);
    if (ai >= 0 && bi >= 0) return ai - bi;
    if (ai >= 0) return -1;
    if (bi >= 0) return 1;
    return 0;
  });
  if (!pending.length) {
    // Refresh 2 oldest
    enriched.sort((a, b) => (a._ts || 0) - (b._ts || 0));
    const res = await Promise.allSettled(enriched.slice(0, 2).map(n => fetchDetail(n.id)));
    res.forEach(r => { if (r.status === 'fulfilled' && r.value) { const i = enriched.findIndex(x => x.id === r.value.id); if (i >= 0) enriched[i] = r.value; } });
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
}

async function fetchDetail(id) {
  try {
    const r = await fetch(CG + '/nfts/' + encodeURIComponent(id), { headers: { 'User-Agent': 'CryptoHub/1.0' } });
    if (!r.ok) return null;
    const d = await r.json();
    return {
      id: d.id || id, name: d.name || '', symbol: (d.symbol || '').toUpperCase(),
      image: d.image?.small || d.image?.thumb || '', chain: d.asset_platform_id || 'ethereum',
      floor_price: { native: d.floor_price?.native_currency || 0, usd: d.floor_price?.usd || 0, symbol: (d.native_currency_symbol || 'ETH').toUpperCase() },
      changes: { h24: d.floor_price_24h_percentage_change?.usd || 0, h7d: d.floor_price_7d_percentage_change?.usd || 0, h30d: d.floor_price_30d_percentage_change?.usd || 0 },
      market_cap: d.market_cap?.usd || 0, volume_24h: d.volume_24h?.usd || 0,
      owners: d.number_of_unique_addresses || 0, total_supply: d.total_supply || 0, _ts: Date.now()
    };
  } catch { return null; }
}

async function handleOne(id, env) {
  if (!id) return jr({ error: 'ID required' }, 400);
  const enriched = await kvGet(env, 'enriched') || [];
  const cached = enriched.find(n => n.id === id);
  if (cached) return jr({ data: cached, _cached: true }, 200, 300);
  const data = await fetchDetail(id);
  return data ? jr({ data, _cached: false }) : jr({ error: 'Not found' }, 404);
}

async function handleStats(env) {
  const master = await kvGet(env, 'master');
  const enriched = await kvGet(env, 'enriched') || [];
  const t = master?.ids?.length || 0;
  const ch = {};
  enriched.forEach(n => { ch[n.chain || '?'] = (ch[n.chain || '?'] || 0) + 1; });
  return jr({ total_in_market: t, enriched: enriched.length, remaining: t - enriched.length, progress: t ? Math.round((enriched.length / t) * 100) + '%' : '0%', chains: ch }, 200, 60);
}

// Helpers
async function kvGet(env, k) { try { return await env.NFT_CACHE.get('nft:' + k, 'json'); } catch { return null; } }
async function kvPut(env, k, v, ttl) { try { await env.NFT_CACHE.put('nft:' + k, JSON.stringify(v), { expirationTtl: ttl || 3600 }); } catch {} }
async function kvDel(env, k) { try { await env.NFT_CACHE.delete('nft:' + k); } catch {} }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
async function safe(fn) { try { await fn(); } catch (e) { console.error('safe:', e.message); } }
function jr(data, s, maxAge) {
  const h = { 'Content-Type': 'application/json', ...CORS };
  if (maxAge) h['Cache-Control'] = `public, max-age=${maxAge}, stale-while-revalidate=${maxAge * 5}`;
  return new Response(JSON.stringify(data), { status: s || 200, headers: h });
}
