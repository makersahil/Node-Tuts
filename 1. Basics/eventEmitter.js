const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('emitted', (arg) => {
    console.log(arg, "event successfully emitted!");
});

myEmitter.on('loaded', (arg) => {
    console.log(arg, "event successfully loaded!");
});

process.on('beforeExit', (code) => {
    console.log('BeforeExit:', code);
})

process.on('exit', (code) => {
    console.log('Exit:', code);
})

myEmitter.emit('emitted', 'first');
myEmitter.emit('emitted', 'second');
myEmitter.emit('loaded', 'first');