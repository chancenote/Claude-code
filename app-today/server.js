const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;

// Fix Git Bash /c/ path mapping issue on Windows
let cwd = process.cwd();
const match = cwd.match(/^([A-Z]):\\([a-z])\\/);
if (match && match[1].toLowerCase() === match[2]) {
  cwd = match[1] + ':\\' + cwd.slice(4);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(cwd, url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + url);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
