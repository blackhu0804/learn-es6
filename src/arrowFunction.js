var add = (a, b) => {
  return a + b;
}
console.log(add(1,2));

// 数组遍历
let arr = ["aaa", "bbb", "ccc"];
arr.forEach((val, index) => console.log(index, val))

arr.filter(x => console.log(x));

arr.some(x => console.log(x));