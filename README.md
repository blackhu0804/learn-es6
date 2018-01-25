# 这是学习es6的代码

## 使用babel搭建es6开发环境

## 声明方式

- var (全局,会被污染)
- let
- const 

## 解构赋值

- 数组解构

```javascript
let [a,b,c] = [1,2,3]

//数组模式和赋值模式统一,不统一将解构失败
let [a,[b,c],d]=[1,[2,3],4];

let [aaa,bbb = 'hu'] = ['black', undefined]
console.log(aaa+bbb); // blackhu

let [ccc,ddd = 'hu'] = ['black', null]
console.log(ccc+ddd); // blacknull
```

- 对象解构

```JavaScript
let {foo, bar} = {foo: 'black', bar: 'hu'};
console.log(foo+bar); // blackhu

let foo;
({foo} = {foo: 'black'});
console.log(foo);
```

- 字符串解构
```javascript
const [q,w,e,r,t] = 'hello';
console.log(q)
console.log(w)
```

## 扩展运算符

```JavaScript
function test(...args){
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);
  console.log(args[3]);
}

test(1,2,3);
// 1 2 3 undefined
```

```JavaScript
let arr1 = ['a','b','c'];
let arr2 = arr1; 
console.log('arr2:'+ arr2);
arr2.push('aaaa');
console.log('arr1:' + arr1);

// output
// arr2:a,b,c
// arr1:a,b,c,aaaa
// 此时arr2没有开辟新的内存空间，只是将arr1地址映射到arr2，如何解决？

let arr1 = ['a','b','c'];
let arr2 = [...arr1];
console.log('arr2:'+ arr2);
arr2.push('aaaa');
console.log('新的arr2:'+ arr2);

console.log('arr1:' + arr1);
//output:
// arr2:a,b,c
// 新的arr2:a,b,c,aaaa
// arr1:a,b,c
```

## 模板字符串

```JavaScript
//用${}引用变量
let a = 111;
console.log(`aaa ${a}`); // aaa 111

//查找字符串是否存在
let b = '111afasrds';
console.log(b.includes(a)); // true

//复制字符串
console.log('a|'.repeat(2)); // a|a|
```

## 数值的扩展
```JavaScript
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
```

## 数组的扩展

```JavaScript
//将json数组格式转换成数组
let json = {
  '0' : 'black',
  '1' : 'hu',
  length: 2
}

let arr = Array.from(json);
console.log(arr); // [ 'black', 'hu' ]

// Array.of
let arr1 = Array.of(3, 4, 5, 6);
console.log(arr1); // [ 3, 4, 5, 6 ]

// find() 实例方法 , value 当前查找值，index 索引
let arr2 = [1, 2, 3, 4];
console.log(arr2.find(function(value, index, arr2){
  return value > 2;
})) // 3
```


