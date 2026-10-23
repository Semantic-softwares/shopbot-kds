// Serves the built Angular app (dist/shopbot-kds/browser) on Heroku. No dependencies.
//  - every path that is not a file falls back to index.html (the router uses real paths, not #)
//  - hashed bundles are cached for a year, index.html never, so a new release shows up at once
//  - text assets are gzip-compressed; plain http is redirected to https behind Heroku's router
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const root = path.join(__dirname, 'dist', 'shopbot-kds', 'browser');
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.map': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};
const compressible = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.webmanifest', '.map']);

function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  const full = path.join(root, clean);
  if (!full.startsWith(root)) return null;
  try {
    if (fs.statSync(full).isFile()) return full;
  } catch { /* not a file: the app's router handles the path */ }
  return path.extname(clean) ? null : path.join(root, 'index.html');
}

http
  .createServer((req, res) => {
    if (req.headers['x-forwarded-proto'] === 'http') {
      res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
      return res.end();
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      return res.end();
    }
    let file;
    try { file = resolveFile(req.url); } catch { file = null; }
    if (!file) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext = path.extname(file).toLowerCase();
    const isIndex = path.basename(file) === 'index.html';
    const headers = {
      'Content-Type': types[ext] || 'application/octet-stream',
      'Cache-Control': isIndex ? 'no-cache, no-store, must-revalidate' : 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
    };
    const gzip = compressible.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    if (gzip) { headers['Content-Encoding'] = 'gzip'; headers['Vary'] = 'Accept-Encoding'; }
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    const stream = fs.createReadStream(file);
    stream.on('error', () => res.destroy());
    (gzip ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
  })
  .listen(process.env.PORT || 8080, () => console.log(`KDS listening on ${process.env.PORT || 8080}`));
