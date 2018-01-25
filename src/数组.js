// json数组格式
let json = {
  '0' : 'black',
  '1' : 'hu',
  length: 2
}
// 将json数组格式转换成数组
let arr = Array.from(json);
console.log(arr);

// Array.of
let arr1 = Array.of(3, 4, 5, 6);
console.log(arr1);

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