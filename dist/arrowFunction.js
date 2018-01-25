"use strict";

var add = function add(a, b) {
  return a + b;
};
console.log(add(1, 2));

// 数组遍历
var arr = ["aaa", "bbb", "ccc"];
arr.forEach(function (val, index) {
  return console.log(index, val);
});

arr.filter(function (x) {
  return console.log(x);
});

arr.some(function (x) {
  return console.log(x);
});