const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.write('Server connected!');
    res.end('What this?');
});

server.listen(PORT, () => {console.log(`Server start at http://localhost:${PORT}`);})