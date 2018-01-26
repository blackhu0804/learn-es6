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

// fill
arr2.fill('555', 1, 4)
console.log(arr2); // [ 1, '555', '555', '555' ]

// 数组循环
for (let [index, value] of arr2.entries()) {
  console.log(`${index}:${value}`);
}

// copyWithin 第一个参数为从该位置替换数据， 第二个参数为从该位置读取数据， 第三个参数为到该位置前停止读取数据
let arr3 = [1, 2, 3, 4];
console.log(arr3.copyWithin(0,2,4)); // [ 3, 4, 3, 4 ]
```

## 箭头函数

```JavaScript
var add = (a, b) => {
  return a + b;
}
console.log(add(1,2));
// 3
```

## 数组遍历
```JavaScript
let arr = ["aaa", "bbb", "ccc"];
arr.forEach((val, index) => console.log(index, val))

arr.filter(x => console.log(x));

arr.some(x => console.log(x));
```

## 对象的扩展
```JavaScript
let name = 'black';
let skill = 'web';
let obj = {name, skill};
console.log(obj)

let key = 'skill';
let obj2 = {
  [key]: 'web'
}
console.log(obj2)

// 判断两个对象key是否相同
console.log(Object.is(obj.skill, obj2.skill)) // true

// assign 合并两个对象
let a = {
  a: 'black'
}
let b = {
  b: 'web'
}
let c = Object.assign(a,b);
console.log(c)
```

## Symbol

```javascript
let obj = {
  name: 'black',
  skill: 'web'
}
let age = Symbol();

console.log(obj); // { name: 'black', skill: 'web' }

for(let item in obj){
  console.log(obj[item])
}
// black
// web
```

## Set and WeakSet

### Set

```javascript
let setArr = new Set([1, 2, 3, 1, 1]);
console.log(setArr);

// 遍历
for(let item of setArr){
  console.log(item)
}
console.log(`--------forEach--------`)
setArr.forEach( (val) => {
  console.log(val)
})

// size
console.log(`setArr大小：${setArr.size}`) // setArr大小：3

// add
setArr.add(4);
console.log(setArr); // Set { 1, 2, 3, 4 }
// search
console.log(setArr.has(1)); // true
// delete
setArr.delete(1);
console.log(setArr); // Set { 2, 3, 4 }
// delete all
setArr.clear();
console.log(setArr); // Set {}
```

### WeakSet

```javascript
let weakset = new WeakSet();
let obj = {
  a: 'black'
}
weakset.add(obj);
console.log(weakset)
```

## Map

```javascript
let json = {
  name: 'black',
  skill: 'web'
}

var map = new Map();
map.set(json, 'I am');
console.log(map);
// Map { { name: 'black', skill: 'web' } => 'I am' }
map.set('suyu', json);
console.log(map)
/* Map {
  { name: 'black', skill: 'web' } => 'I am',
  'suyu' => { name: 'black', skill: 'web' } } */

// get
console.log(map.get('suyu'));
//{ name: 'black', skill: 'web' }

//delete
map.delete(json);
console.log(map);
// Map { 'suyu' => { name: 'black', skill: 'web' } }

//size
console.log(map.size); // 1

// has
console.log(map.has('suyu')); // true
```

## Proxy

> Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

```javascript
let obj = {
  add: function(val) {
    return val + 100;
  },
  name: 'I am black'
}

let pro = new Proxy({
  add: function(val) {
    return val + 100;
  },
  name: 'I am black'
},{
  // 预处理
  get: function(target, key, property){
    console.log('come in Get');
    return target[key];
  },
  set: function(target, key, value, receiver){
    console.log(`setting ${key} = ${value}`);
    // 必须返回才能改变
    return target[key] = value;
  }
});

console.log(pro.name);
pro.name = 'suyu';
console.log(pro.name);
/* 
output：
  come in Get
  I am black
  setting name = suyu
  come in Get
  suyu 
*/
```

## Promise

```javascript
let state = 1;

function step1(resolve, reject) {
  console.log('1.洗菜做饭');
  if(state == 1){
    resolve('1...完成');
  } else {
    reject('1...没完成');
  }
}

function step2(resolve, reject) {
  console.log('2.吃饭');
  if(state == 1){
    resolve('2...完成');
  } else {
    reject('2...没完成');
  }
}

function step3(resolve, reject) {
  console.log('3.洗碗');
  if(state == 1){
    resolve('3...完成');
  } else {
    reject('3...没完成');
  }
}

new Promise(step1).then( function(val){
  console.log(val);
  return new Promise(step2);
}).then( function(val){
  console.log(val);
  return new Promise(step3);
}).then( function(val) {
  console.log(val);
});

/* 
output: 
  1.洗菜做饭
  1...完成
  2.吃饭
  2...完成
  3.洗碗
  3...完成
*/
```

## Class

```javascript
class Person {
  name(val) {
    return val;
  }

  skill(val) {
    console.log(this.name('black') +'：'+ val);
  }

  constructor(a, b){
    // 传参
    this.a = a;
    this.b = b;
  }

  add(){
    return this.a + this.b;
  }
}

let person = new Person(1, 2);
person.skill('web')  // black：web
console.log(person.add())  // 3

class student extends Person{
  // 继承Person
}

let xiaoming = new student;
xiaoming.skill('learn'); // black：learn
```