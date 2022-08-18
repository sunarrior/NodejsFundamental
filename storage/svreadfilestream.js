const http = require('http');
const fs = require('fs');

const PORT = 5000;

server = http.createServer();
server.on('request', (req, res) => {
    const fileStream = fs.createReadStream('./folder/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        console.error(err);
    });
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});