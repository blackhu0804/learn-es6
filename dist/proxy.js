'use strict';

var obj = {
  add: function add(val) {
    return val + 100;
  },
  name: 'I am black'
};

var pro = new Proxy({
  add: function add(val) {
    return val + 100;
  },
  name: 'I am black'
}, {
  // 预处理
  get: function get(target, key, property) {
    console.log('come in Get');
    return target[key];
  },
  set: function set(target, key, value, receiver) {
    console.log('setting ' + key + ' = ' + value);
    // 必须返回才能改变
    return target[key] = value;
  }
});

console.log(pro.name);
pro.name = 'suyu';
console.log(pro.name);