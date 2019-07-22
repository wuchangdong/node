/**
 * @file
 * @generator
 */

/**
 * nextTick setImmediate 区别与联系
 * nextTick 回调函数放在执行栈得尾部
 * setImmediate 回调函数放在事件队列尾部
 */

/**
 * 这里面setTimeOut()与setInterval()除了执行频次外基本相同，都表示主线程执行完一定时间后立即执行，
 * 而setImmediate()与之十分相似，也表示主线程执行完成后立即执行。那么他们之间的区别是什么呢？
 * 两者都代表主线程完成后立即执行，其执行结果是不确定的，可能是setTimeout回调函数执行结果在前，
 * 也可能是setImmediate回调函数执行结果在前，但setTimeout回调函数执行结果在前的概率更大些，
 * 这是因为他们采用的观察者不同，setTimeout采用的是类似IO观察者，setImmediate采用的是check观察者，
 * 而process.nextTick()采用的是idle观察者。
 * 三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者
 */

function read() {
    setImmediate(function () {
        console.log(1);
        setImmediate(function () {
            console.log(4);
        });
        setTimeout(function () {
            console.log(5);
        });
        process.nextTick(function () {
            console.log(2);
            process.nextTick(function () {
                console.log(3);
            });
        });
    });
}
process.nextTick(function () {
    console.log(0);
});

read(); // 012345 或 012354

