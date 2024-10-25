// server.js
const  { createServer } =require('node:http');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});


const PORT =process.env.PORT || 3000

// starts a simple http server locally on port 3000
server.listen(PORT, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:3000');
});

// run with `node server.mjs`
