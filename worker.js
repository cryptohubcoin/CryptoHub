export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname.toLowerCase();
    
    // Block bot probing
    if (p.includes('wp-admin') || p.includes('wp-login') || p.includes('wp-content') ||
        p.includes('xmlrpc') || p.includes('phpmyadmin') || p.includes('.env') || p.includes('.git')) {
      return new Response('', { status: 403, headers: { 'Cache-Control': 'public, max-age=86400' } });
    }
    
    return env.ASSETS.fetch(request);
  }
};
