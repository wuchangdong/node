/**
 * @file global
 * @generator wuchangdong
 */
// global得变量都是全局变量
// 所有全局变量都是global得

/**
 * console
 * process  当前进程
 * chdir
 * cwd
 * nextTick
 * stdout stderr stdin
 * Buffer
 * clearImmediate clearInterval clearTimeout
 * setImmediate setInterval setTimeout
 */

console.log(process.cwd()); // 当前工作目录
process.chdir('..'); // 切换上级目录
console.log(process.cwd());
console.log(process.memoryUsage());
/**
 * V8引擎最大使用内存量为1.7G
 * { rss: 21311488, 常驻内存
  heapTotal: 7159808, 堆内存总申请量
  heapUsed: 4450400, 已使用得量
  external: 8224 } 外部内存得使用量
 */