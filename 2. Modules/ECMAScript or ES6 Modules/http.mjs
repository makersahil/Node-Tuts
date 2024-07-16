import { send } from './request.mjs';
import { read } from './response.mjs';
const http = require('http');

function fetch(url, data) {
    send(url, data);
    return read()
}

const res = fetch('www.google.com', 'Hello');

console.log(res);