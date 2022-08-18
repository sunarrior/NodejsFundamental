const os = require('os');
const path = require('path');
const fs = require('fs');

console.log(`System uptime is ${os.uptime()} seconds`);

const osInfo = {
    name: os.type(),
    version: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(osInfo);

const filePath = path.join(__dirname, 'folder', 'subfolder', 'text.txt');
console.log(filePath);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(data);
    }
});