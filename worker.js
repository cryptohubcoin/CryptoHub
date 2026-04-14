export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname.toLowerCase();

    // Block bots only
    if (p.includes('wp-admin') || p.includes('wp-login') || p.includes('wp-content') ||
        p.includes('xmlrpc') || p.includes('phpmyadmin') || p.includes('.env') || p.includes('.git')) {
      return new Response('', { status: 403 });
    }

    // API routes
    if (p.startsWith('/api/')) {
      return new Response('API', { status: 200 });
    }

    // 🎯 خلّي Cloudflare يتعامل مع الـ Cache (الـ Rules هتشتغل)
    return env.ASSETS.fetch(request);
  }
};
