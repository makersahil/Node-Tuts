const { createServer } = require('http');

const server = createServer()

server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Sahil Gupta',
        age: 21
    }));
});



server.listen(3000, () => {
    console.log('Server Started Successfully!');
})