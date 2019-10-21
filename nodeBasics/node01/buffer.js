// let buf1 = Buffer.alloc(6, 2);
// console.log(buf1);

// let buf2 = Buffer.allocUnsafe(60);
// console.log(buf2);

// let buf3 = Buffer.from('哈哈哈哈');
// console.log(buf3);


// let buf4 = Buffer.alloc(4);
// buf4.fill(3, 1, 3); // 1 填充的值 2 开始索引 3 结束索引（不包括）
// console.log(buf4);

// buf4.write('哈哈', 3, 3, 'utf8'); // 1 写的字符串 2 开始的索引 3 填充的长度 4 编码
// console.log(buf4.toString());

// let buf5 = Buffer.alloc(6);
// // 向指定的索引写入一个8位的整数 也就是说占用一个字节的整数
// buf5.writeInt8(0, 0);
// buf5.writeInt8(16, 1);
// buf5.writeInt8(32, 2);
// console.log(buf5); // [0, 10, 20]


// let buf6 = Buffer.alloc(5);
// // buf6.writeInt16BE(256, 0); // BE big 高位在前  01 00
// // console.log(buf6); // [01 00 00 00]

// let s = buf6.writeInt16LE(256, 2); // LE little 低位在前  00 01
// console.log(buf6); // [01 00 00 01]

// console.log(s);


let buf7 = Buffer.from('嘻嘻哈哈');
let buf8 = buf7.slice(0, 5);
let buf9 = buf7.slice(5);
let s = require('string_decoder');
const {StringDecoder} = s;
const sd = new StringDecoder();
// console.log(s);
console.log(buf8.toString());


// 解决buf不完整出现乱码， 原理：缓存起来 加到下次write中
console.log(sd.write(buf8));
console.log(sd.write(buf9));
    