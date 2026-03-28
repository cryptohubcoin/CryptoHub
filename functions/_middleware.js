export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  const blocked = [
    'wp-admin', 'wp-login', '.env', '.git', 
    'xmlrpc.php', 'wp-content', 'wp-includes',
    'admin', 'phpmyadmin', 'pma', 'config'
  ];
  
  const isBlocked = blocked.some(p => url.pathname.includes(p));
  
  if (isBlocked) {
    return new Response('Not Found', { 
      status: 404,
      headers: { 'Cache-Control': 'no-store' }
    });
  }

  return context.next();
}
