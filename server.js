// Persistent demo server for the browser-preview test.
const http = require('http');
const port = 3000;
let hits = 0;
http.createServer((req, res) => {
  hits+=1;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>MVS-CODE demo</title>
  <style>body{font-family:sans-serif;background:#1e1e1e;color:#eee;padding:24px}
  h1{color:#4fc3f7}code{background:#333;padding:2px 6px;border-radius:4px}</style></head>
  <body><h1>Hello from Node on Android 👋</h1>
  <p>Served by <code>node ${process.version}</code> running inside the MVS-CODE terminal.</p>
  <p>Request <b>#${hits}</b> for <code>${req.url}</code> from <code>${req.headers['user-agent'] || '?'}</code></p>
  <p>Time: ${new Date().toISOString()}</p></body></html>`);
}).listen(port, '0.0.0.0', () => console.log(`Server listening on http://localhost:${port}`));
