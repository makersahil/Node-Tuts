const { createServer } = require('http');

const server = createServer()

const friends = [
    {
        id: 1,
        name: 'Sahil Gupta',
        age: 21
    },
    {
        id: 2,
        name: 'Subhash Sharma',
        age: 22
    },
    {
        id: 3,
        name: 'Shivam Thakur',
        age: 20
    }
]

server.on('request', (req, res) => {

    const items = req.url.split('/');
    console.log(items);

    if (req.method == 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log("Request:", friend);
            friends.push(JSON.parse(friend))
            // res.end('Friend Added Successfuly!');
        });
        req.pipe(res);

    } else if (req.method == 'GET' && items[1] === 'friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        
        if (items.length == 3) {
            friends.forEach((item) => {
                if (item.id == items[2]) {
                    console.log(item);
                    res.end(JSON.stringify(item));
                }
            })
        } else {
            res.end(JSON.stringify(friends))
        }

    } else if (items[1] === 'say-hello') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Welcome! <h1>');
        res.write('<h4> Are you okay? </h4>');
        res.write('<p>I am glad to welcome you home!</p>');
        res.end();
    } else {
        res.writeHead(404)
        res.end('404 Error!');
    }
});



server.listen(3000, () => {
    console.log('Server Started Successfully!');
})