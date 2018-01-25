'use strict';

503 === 503; //true 0b表示2进制
503 === 503; // true 0o表示8进制

//如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。

Number('0b111'); // 7
Number('0o10'); // 8

// 判断是否是个数字
console.log(Number.isFinite(1));