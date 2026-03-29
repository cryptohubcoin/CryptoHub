const CG = 'https://api.coingecko.com/api/v3';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'GET') return jr({ error: 'Method not allowed' }, 405);
    const url = new URL(request.url);
    const p = url.pathname;
    try {
      if (p === '/api/nfts' || p === '/api/nfts/') return await handleNFTsFast(env, ctx);
      if (p === '/api/enrich') return await handleEnrich(env, ctx);
      if (p.startsWith('/api/nft/')) return await handleOne(p.replace('/api/nft/', '').replace(/\/$/, ''), env);
      if (p === '/api/stats') return await handleStats(env);
      if (p === '/api/health') return jr({ status: 'ok', ts: Date.now() });
      if (p === '/api/reset') { await kvDel(env, 'master'); await kvDel(env, 'enriched'); return jr({ status: 'cache cleared' }); }
      return jr({ error: 'Not found' }, 404);
    } catch (e) { return jr({ error: e.message }, 500); }
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(enrichBatch(env, 20));
  }
};

// FAST — returns cached data instantly, triggers enrich in background
async function handleNFTsFast(env, ctx) {
  let master = await kvGet(env, 'master');
  if (!master || !master.ids?.length) {
    master = await fetchMasterList(env);
  }
  let enriched = await kvGet(env, 'enriched') || [];
  // Trigger enrichment in background (non-blocking)
  ctx.waitUntil(enrichBatch(env, 15));
  return jr({
    total: enriched.length,
    total_known: master?.ids?.length || 0,
    progress: master?.ids?.length ? Math.round((enriched.length / master.ids.length) * 100) + '%' : '0%',
    data: enriched.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0)),
    _ts: Date.now()
  });
}

// Explicit enrich trigger
async function handleEnrich(env, ctx) {
  ctx.waitUntil(enrichBatch(env, 20));
  const enriched = await kvGet(env, 'enriched') || [];
  return jr({ status: 'enriching', current: enriched.length });
}

async function fetchMasterList(env) {
  const allIds = [];
  for (let page = 1; page <= 8; page++) {
    try {
      const r = await fetch(CG + '/nfts/list?per_page=250&page=' + page, {
        headers: { 'User-Agent': 'CryptoHub/1.0', 'Accept': 'application/json' }
      });
      if (r.status === 429) { await sleep(3000); continue; }
      if (!r.ok) break;
      const data = await r.json();
      if (!Array.isArray(data) || data.length === 0) break;
      data.forEach(n => allIds.push({ id: n.id, name: n.name || '', chain: n.asset_platform_id || 'ethereum' }));
      await sleep(2000);
    } catch (e) { break; }
  }
  const master = { ids: allIds, ts: Date.now() };
  await kvPut(env, 'master', master, 3600);
  return master;
}

async function enrichBatch(env, size) {
  let master = await kvGet(env, 'master');
  if (!master || !master.ids?.length) master = await fetchMasterList(env);
  if (!master?.ids?.length) return;
  let enriched = await kvGet(env, 'enriched') || [];
  const done = new Set(enriched.map(n => n.id));
  const priority = ['bored-ape-yacht-club','cryptopunks','mutant-ape-yacht-club','pudgy-penguins','azuki','milady-maker','doodles-official','degods','mad-lads','autoglyphs','cool-cats-nft','moonbirds','clone-x-x-takashi-murakami','meebits','world-of-women-nft','nouns','chromie-squiggle-by-snowfro','fidenza-by-tyler-hobbs','veefriends','otherdeed-for-otherside','lil-pudgys','beanz-official','invisible-friends','nakamigos','mfers','captainz','goblintown','okay-bears','claynosaurz','tensorians','famous-fox-federation','solana-monkey-business','y00ts','degenerate-ape-academy','nodemonkes','bitcoin-puppets','quantum-cats','ordinal-maxi-biz','bitcoin-frogs','runestones','taproot-wizards','wrapped-cryptopunks','checks-vv-edition','opepen-edition','sproto-gremlins','tiny-based-frogs','deadfellaz','10ktf','the-potatoz','0n1-force','genuine-undead','my-pet-hooligan','memeland-captains','parallel-avatars','kanpai-pandas','space-doodles','alien-frens','karafuru','art-blocks-curated','the-sandbox','tubby-cats','basepaint'];
  const pending = master.ids.filter(n => !done.has(n.id)).sort((a, b) => {
    const ai = priority.indexOf(a.id), bi = priority.indexOf(b.id);
    if (ai >= 0 && bi >= 0) return ai - bi;
    if (ai >= 0) return -1;
    if (bi >= 0) return 1;
    return 0;
  });
  if (pending.length === 0) {
    enriched.sort((a, b) => (a._ts || 0) - (b._ts || 0));
    const stale = enriched.slice(0, 5);
    for (let i = 0; i < stale.length; i += 2) {
      const chunk = stale.slice(i, i + 2);
      const res = await Promise.allSettled(chunk.map(n => fetchDetail(n.id)));
      res.forEach(r => { if (r.status === 'fulfilled' && r.value) { const idx = enriched.findIndex(x => x.id === r.value.id); if (idx >= 0) enriched[idx] = r.value; } });
      await sleep(2200);
    }
    await kvPut(env, 'enriched', enriched, 14400);
    return;
  }
  const batch = pending.slice(0, size);
  for (let i = 0; i < batch.length; i += 3) {
    const chunk = batch.slice(i, i + 3);
    const res = await Promise.allSettled(chunk.map(n => fetchDetail(n.id)));
    res.forEach(r => { if (r.status === 'fulfilled' && r.value) enriched.push(r.value); });
    if (i + 3 < batch.length) await sleep(2200);
  }
  await kvPut(env, 'enriched', enriched, 14400);
}

async function fetchDetail(id) {
  try {
    const r = await fetch(CG + '/nfts/' + encodeURIComponent(id), { headers: { 'User-Agent': 'CryptoHub/1.0', 'Accept': 'application/json' } });
    if (r.status === 429) return null;
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
  } catch (e) { return null; }
}

async function handleOne(id, env) {
  if (!id) return jr({ error: 'ID required' }, 400);
  const enriched = await kvGet(env, 'enriched') || [];
  const cached = enriched.find(n => n.id === id);
  if (cached) return jr({ data: cached, _cached: true });
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
  return jr({ total_in_market: total, total_enriched: enriched.length, remaining: total - enriched.length, progress: total ? Math.round((enriched.length / total) * 100) + '%' : '0%', chains, master_updated: master?.ts ? new Date(master.ts).toISOString() : null });
}

async function kvGet(env, key) { if (!env.NFT_CACHE) return null; try { return await env.NFT_CACHE.get('nft:' + key, 'json'); } catch { return null; } }
async function kvPut(env, key, val, ttl) { if (!env.NFT_CACHE) return; try { await env.NFT_CACHE.put('nft:' + key, JSON.stringify(val), { expirationTtl: ttl || 3600 }); } catch {} }
async function kvDel(env, key) { if (!env.NFT_CACHE) return; try { await env.NFT_CACHE.delete('nft:' + key); } catch {} }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function jr(data, s) { return new Response(JSON.stringify(data), { status: s || 200, headers: { 'Content-Type': 'application/json', ...CORS } }); }
