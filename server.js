const http = require('http');

const PORT = 5000;

// const server = http.createServer((req, res) => {
//     res.write('Server connected!');
//     res.end('What this?');
// });

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Server connected!');
    
});

server.listen(PORT, () => {console.log(`Server start at http://localhost:${PORT}`);})