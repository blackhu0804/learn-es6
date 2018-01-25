'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// json数组格式
var json = {
  '0': 'black',
  '1': 'hu',
  length: 2
  // 将json数组格式转换成数组
};var arr = Array.from(json);
console.log(arr);

// Array.of
var arr1 = Array.of(3, 4, 5, 6);
console.log(arr1);

// find() 实例方法 , value 当前查找值，index 索引
var arr2 = [1, 2, 3, 4];
console.log(arr2.find(function (value, index, arr2) {
  return value > 2;
})); // 3

// fill
arr2.fill('555', 1, 4);
console.log(arr2); // [ 1, '555', '555', '555' ]

// 数组循环
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        value = _step$value[1];

    console.log(index + ':' + value);
  }

  // copyWithin 第一个参数为从该位置替换数据， 第二个参数为从该位置读取数据， 第三个参数为到该位置前停止读取数据
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

var arr3 = [1, 2, 3, 4];
console.log(arr3.copyWithin(0, 2, 4));