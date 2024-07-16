const response = require('./response')
const request = require('./request')

function fetch(url, data) {
    request.send(url, data);
    return response.read()
}

const res = fetch('www.google.com', 'Hello');

console.log(res);