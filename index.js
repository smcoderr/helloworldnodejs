// server.js
const  { createServer } =require('node:http');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});


const PORT =process.env.PORT || 3000

// starts a simple http server locally on port 3000
server.listen(PORT, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
