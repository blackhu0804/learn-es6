// Symbol
let obj = {
  name: 'black',
  skill: 'web'
}
let age = Symbol();

console.log(obj); // { name: 'black', skill: 'web' }

for(let item in obj){
  console.log(obj[item])
}
// black
// web