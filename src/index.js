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

console.log(b);//b is not defined

// const
const c = 'black';
// var c = 1; 
// 不能被重复声明，会报语法错误   
console.log(c);