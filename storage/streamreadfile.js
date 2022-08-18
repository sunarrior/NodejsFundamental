const {createReadStream} = require('fs')

// default buffer size is 64kb
// last buffer is remainder
// highWaterMark: control buffer size
const readStream = createReadStream('./folder/big.txt');
// change buffer size to 150kb
// const readStream = createReadStream('./folder/big.txt', {highWaterMark: 150000});
// const readStream = createReadStream('./folder/big.txt', {encoding: 'utf-8'});

readStream.on('data', (chunk) => {
    console.log(chunk);
});