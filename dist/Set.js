'use strict';

// Set
var setArr = new Set([1, 2, 3, 1, 1]);
console.log(setArr);

// 遍历
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = setArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('--------forEach--------');
setArr.forEach(function (val) {
  console.log(val);
});

// size
console.log('setArr\u5927\u5C0F\uFF1A' + setArr.size); // setArr大小：3

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
var weakset = new WeakSet();
var obj = {
  a: 'black'
};
weakset.add(obj);
console.log(weakset);