export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase();
  
  const blocked = [
    '/wp-admin', '/wp-login', '/wp-content', '/wp-includes',
    '/xmlrpc.php', '/phpmyadmin', '/pma', '/.env', '/.git',
    '/admin', '/config', '/setup', '/install'
  ];
  
  const isBlocked = blocked.some(p => path.startsWith(p));
  
  if (isBlocked) {
    return new Response('Not Found', { 
      status: 404,
      headers: { 'Cache-Control': 'no-store' }
    });
  }

  return context.next();
}
