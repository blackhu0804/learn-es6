'use strict';

// Symbol
var obj = {
  name: 'black',
  skill: 'web'
};
var age = Symbol();

console.log(obj); // { name: 'black', skill: 'web' }

for (var item in obj) {
  console.log(obj[item]);
}
// black
// web