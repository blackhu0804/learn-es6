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