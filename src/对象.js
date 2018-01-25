let name = 'black';
let skill = 'web';
let obj = {name, skill};
console.log(obj)

let key = 'skill';
let obj2 = {
  [key]: 'web'
}
console.log(obj2)

//自定义对象方法
let obj3 = {
  add: function(a,b) {
    return a + b;
  }
}
console.log(obj3.add(1,2));

// 判断两个对象key是否相同
console.log(Object.is(obj.skill, obj2.skill))

// assign
let a = {
  a: 'black'
}
let b = {
  b: 'web'
}
let c = Object.assign(a,b);
console.log(c)
