// Set
let setArr = new Set([1, 2, 3, 1, 1]);
console.log(setArr);

// 遍历
for(let item of setArr){
  console.log(item)
}
console.log(`--------forEach--------`)
setArr.forEach( (val) => {
  console.log(val)
})

// size
console.log(`setArr大小：${setArr.size}`) // setArr大小：3

// add
setArr.add(4);
console.log(setArr); // Set { 1, 2, 3, 4 }
// search
console.log(setArr.has(1)); // true
// delete
setArr.delete(1);
console.log(setArr); // Set { 2, 3, 4 }
// delete all
setArr.clear();
console.log(setArr); // Set {}

// WeakSet
let weakset = new WeakSet();
let obj = {
  a: 'black'
}
weakset.add(obj);
console.log(weakset)
