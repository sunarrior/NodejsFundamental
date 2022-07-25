const {readFile} = require('fs').promises
// const util = require('util')
// const readFilePromises = util.promisify(readFile) 

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

// getText("./folder/subfolder/text.txt")
//     .then((data) => {console.log(data);})
//     .catch((err) => {console.error(err);});

const start = async () => {
    try {
        const getData = await readFile("./folder/subfolder/text.txt", 'utf-8');
        console.log(getData);
    } catch(err) {
        console.error(err);
    }
}

start();