/**
 * fs核心模块读写文件
 *
 */

const fs = require('fs');
fs.readFile('./1.txt',
    {encoding: 'utf8'},
    (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(data);
        }
    });

// 同步读取
const data = fs.readFileSync('./1.txt');
console.log(data, 11);

fs.writeFile('./2.txt', 'data', err => {
    if (err) {
        console.error(err);
    }
});

fs.appendFile('./2.txt', 'data', err => {
    if (err) {
        console.error(err);
    }
});

fs.appendFile('./2.txt', 'data', err => {
    if (err) {
        console.error(err);
    }
});
