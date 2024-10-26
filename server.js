const http = require('http');

// Create a server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;  // HTTP status code: OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
