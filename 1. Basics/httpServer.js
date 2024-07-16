const { createServer } = require('http');

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello, NodeJS');
});

server.listen(3000, () => {
    console.log(`Server started on: localhost:3000`);
});