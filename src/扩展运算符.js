function test(...args){
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);
  console.log(args[3]);
}

test(1,2,3);
// 1 2 3 undefined


//------------------------

/*
  let arr1 = ['a','b','c'];
  let arr2 = arr1; 
  console.log('arr2:'+ arr2);
  arr2.push('aaaa');
  console.log('arr1:' + arr1);
*/
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

/**
 * ----------rest运算符--------------
 */
function test2(a, ...args){
  console.log(args.length);
}

test2(1,2,3,4,5); // 4