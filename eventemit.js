const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('response', () => {
    console.log('Data received');
});

eventEmitter.emit('response');
