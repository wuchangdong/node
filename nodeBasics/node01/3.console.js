console.log(1);
console.info(1);


// 把错误输出2定向到标准输出1中
// node 3.console.js 1 >a.log 2>&1
console.warn(2);
console.error(2);

// 用来统计两端代码之间执行时间得
console.time('cost');

let i = 0;
while (i++ < 10000) {

}
console.timeEnd('cost'); // 输出时间差


// 断言
// 如果表达式表达为真得话什么也不会发生
// 如果表达式为假得话会报错 nagios 监控服务器得
function sum(a, b) {
    return a + b;
}
console.assert(sum(1, 2) === 3, '');

// 列出对象结构
console.dir(global);

// 跟踪当前代码调用栈
console.trace();