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
const filePath = path.join(cwd, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error reading file: ' + filePath + ' => ' + err.message);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log('File path: ' + filePath);
  console.log('Server running at http://localhost:' + PORT);
});
