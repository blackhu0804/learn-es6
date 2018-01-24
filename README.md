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