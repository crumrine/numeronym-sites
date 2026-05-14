// Tarpit middleware for Cloudflare Pages
// Catches bot scanners probing for WordPress, .env, .git, etc.

const BOT_PATHS = [
  '/wp-login.php', '/wp-admin', '/wp-admin/', '/wp-includes/', '/wp-content/',
  '/wp-config.php', '/wp-config.bak', '/wp-json/', '/xmlrpc.php',
  '/.env', '/.env.bak', '/.env.local', '/.env.production',
  '/.git/config', '/.git/HEAD', '/.DS_Store',
  '/admin/', '/administrator/', '/admin.php', '/login', '/login.php',
  '/phpmyadmin/', '/pma/', '/myadmin/',
  '/config.php', '/configuration.php', '/settings.php',
  '/backup.sql', '/dump.sql', '/database.sql', '/db.sql',
  '/server-status', '/server-info', '/.htaccess', '/.htpasswd',
  '/cgi-bin/', '/shell.php', '/cmd.php', '/eval.php',
  '/vendor/phpunit/', '/solr/', '/actuator/', '/api/v1/debug',
];

function isBotPath(path) {
  const lower = path.toLowerCase();
  if (lower.startsWith('/wp-')) return true;
  return BOT_PATHS.some(p => lower === p || lower.startsWith(p));
}

function slowDrip(content, contentType = 'text/plain') {
  const encoder = new TextEncoder();
  const chunks = [];
  for (let i = 0; i < content.length; i += 3) {
    chunks.push(content.substring(i, i + 3));
  }
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  (async () => {
    for (const chunk of chunks) {
      await writer.write(encoder.encode(chunk));
      await new Promise(r => setTimeout(r, 100 + Math.random() * 400));
    }
    await writer.close();
  })();
  return new Response(readable, {
    headers: {
      'Content-Type': contentType,
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-store',
      'X-Powered-By': 'PHP/8.2.13',
      'Server': 'Apache/2.4.57',
    },
  });
}

async function logAttempt(env, type, path, data, request) {
  if (!env?.TARPIT_DB) return;
  try {
    const host = new URL(request.url).hostname;
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const ua = (request.headers.get('user-agent') || '').substring(0, 200);
    const country = request.headers.get('cf-ipcountry') || '';
    const asn = Number(request.cf?.asn) || 0;
    const asOrg = (request.cf?.asOrganization || '').substring(0, 100);
    const dataStr = JSON.stringify(data ?? null).substring(0, 500);
    // Rollup UPSERT: one row per (site, type, ip, hour). Repeats increment
    // count instead of appending a new row. Matches domain-sites/shared/tarpit.js.
    await env.TARPIT_DB.prepare(
      `INSERT INTO tarpit_rollup
         (site, type, ip, hour_bucket, count, first_ts, last_ts, path, ua, country, asn, as_org, data)
       VALUES (?, ?, ?, strftime('%Y-%m-%d %H:00:00','now'), 1,
               datetime('now'), datetime('now'), ?, ?, ?, ?, ?, ?)
       ON CONFLICT(site, type, ip, hour_bucket) DO UPDATE SET
         count = count + 1,
         last_ts = datetime('now'),
         path = excluded.path,
         ua = excluded.ua`
    ).bind(host, type, ip, path, ua, country, asn, asOrg, dataStr).run();
  } catch {
    // Table might not exist yet
  }
}

function fakeEnvContent() {
  return `# Application Configuration
APP_NAME=MyApplication
APP_ENV=production
APP_KEY=base64:${btoa(crypto.getRandomValues(new Uint8Array(32)).join('')).substring(0,44)}
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=db-prod-${Math.floor(Math.random()*999)}.internal.example.com
DB_PORT=3306
DB_DATABASE=app_production
DB_USERNAME=app_user_${Math.floor(Math.random()*9999)}
DB_PASSWORD=${Array.from(crypto.getRandomValues(new Uint8Array(20))).map(b=>String.fromCharCode(33+b%94)).join('')}

AWS_ACCESS_KEY_ID=AKIA${Array.from(crypto.getRandomValues(new Uint8Array(8))).map(b=>'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'[b%32]).join('')}
AWS_SECRET_ACCESS_KEY=${Array.from(crypto.getRandomValues(new Uint8Array(30))).map(b=>'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[b%64]).join('')}
`;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const host = url.hostname;

  if (!isBotPath(path)) return next();

  // .env probes
  if (path.startsWith('/.env')) {
    logAttempt(env, 'env', path, {}, request);
    return slowDrip(fakeEnvContent(), 'text/plain');
  }

  // .git probes
  if (path.startsWith('/.git')) {
    logAttempt(env, 'git', path, {}, request);
    return slowDrip('[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n[remote "origin"]\n\turl = git@github.com:internal/production-app.git\n', 'text/plain');
  }

  // xmlrpc
  if (path === '/xmlrpc.php') {
    logAttempt(env, 'xmlrpc', path, {}, request);
    return slowDrip('<?xml version="1.0"?>\n<methodResponse><fault><value><struct><member><name>faultCode</name><value><int>403</int></value></member></struct></value></fault></methodResponse>', 'text/xml');
  }

  // wp-admin AJAX (honeypot login creds)
  if (path === '/wp-admin/admin-ajax.php' && request.method === 'POST') {
    request.json().then(data => logAttempt(env, 'login', path, data, request)).catch(() => {});
    return slowDrip('{"success":false,"data":{"message":"Invalid username or password."}}', 'application/json');
  }

  // wp-admin pages
  if (path.startsWith('/wp-admin')) {
    logAttempt(env, 'admin', path, {}, request);
    return new Response('<html><body><p>Loading dashboard...</p></body></html>', {
      headers: { 'Content-Type': 'text/html', 'X-Powered-By': 'PHP/8.2.13' },
    });
  }

  // All other wp- paths
  if (path.startsWith('/wp-')) {
    logAttempt(env, 'wp-probe', path, {}, request);
    return slowDrip('<html><body><p>Please wait...</p></body></html>', 'text/html');
  }

  // Database/config/shell probes
  logAttempt(env, 'probe', path, {}, request);
  return slowDrip('Access denied.\n\nThis incident has been logged.\nYour IP: ' + (request.headers.get('cf-connecting-ip') || 'unknown') + '\n', 'text/plain');
}
