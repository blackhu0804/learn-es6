'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = 'black';
var skill = 'web';
var obj = { name: name, skill: skill };
console.log(obj);

var key = 'skill';
var obj2 = _defineProperty({}, key, 'web');
console.log(obj2);

//自定义对象方法
var obj3 = {
  add: function add(a, b) {
    return a + b;
  }
};
console.log(obj3.add(1, 2));

// 判断两个对象key是否相同
console.log(Object.is(obj.skill, obj2.skill));

// assign
var a = {
  a: 'black'
};
var b = {
  b: 'web'
};
var c = Object.assign(a, b);
console.log(c);