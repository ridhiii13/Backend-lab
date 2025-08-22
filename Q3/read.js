const http = require('http');
const fs = require('fs');

const PORT = 3000; // you can change this port if needed

const server = http.createServer((req, res) => {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("Error: file.txt not found!");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}/`);
});
