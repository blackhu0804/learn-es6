0b111110111 === 503 //true 0b表示2进制
0o767 === 503 // true 0o表示8进制

//如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
Number('0b111')  // 7
Number('0o10')  // 8

// 判断是否是个数字
console.log(Number.isFinite(1)); //true
// 判断是否为非数字
console.log(Number.isNaN(1)); // false
// 判断一个数字是否 为整数
console.log(Number.isInteger(23.2)); // false 
// 将数字转换为整型
console.log(Number.parseInt(123.2)); // 123
// 最大/小安全整数
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);