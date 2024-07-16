const { request, get } = require('http');

// specifies the request
const req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`The receieved data is ${chunk}`);
    })
    res.on('end', () => {
        console.log("Data transmission done!")
    });
})

// sends the request
req.end();