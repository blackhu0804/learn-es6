// var
var a = 'black';

{
  var a = "黑"
}
console.log(a);//黑

// let
{
  let b = 'black'
}

// console.log(b);//b is not defined

// const
const c = 'black';
// var c = 1; 
// 不能被重复声明，会报语法错误   
console.log(c);

//---------- 解构赋值------------

// 数组解构
let [aa, bb, cc] = [1, 2, 3];
console.log(aa);
console.log(bb);
console.log(cc);

let [aaa,bbb = 'hu'] = ['black', undefined]
console.log(aaa+bbb); // blackhu

let [ccc,ddd = 'hu'] = ['black', null]
console.log(ccc+ddd); // blacknull

// 对象解构
let foo;
({foo} = {foo: 'black'});
console.log(foo);

// 字符串解构
const [q,w,e,r,t] = 'hello';
console.log(q)
console.log(w)