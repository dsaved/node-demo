// Small Node.js demo: start an HTTP server, hit it with fetch(), then exit.
const http = require('http');
const os = require('os');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    hello: 'from MVS-CODE terminal',
    node: process.version,
    arch: process.arch,
    platform: process.platform,
    cwd: process.cwd(),
    files: fs.readdirSync('.').length,
  }));
});

server.listen(3000, '127.0.0.1', async () => {
  console.log('server listening on http://127.0.0.1:3000');
  const res = await fetch('http://127.0.0.1:3000/');
  const json = await res.json();
  console.log('response:', json);
  console.log('host:', os.hostname(), '| cpus:', os.cpus().length, '| mem:', Math.round(os.totalmem() / 1e9) + 'GB');
  server.close(() => console.log('server closed, exiting'));
});
// edited on the tablet
