'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// var
var a = 'black';

{
  var a = "黑";
}
console.log(a); //黑

// let
{
  var b = 'black';
}

// console.log(b);//b is not defined

// const
var c = 'black';
// var c = 1; 
// 不能被重复声明，会报语法错误   
console.log(c);

//---------- 解构赋值------------

// 数组解构
var aa = 1,
    bb = 2,
    cc = 3;

console.log(aa);
console.log(bb);
console.log(cc);

var aaa = 'black',
    _undefined = undefined,
    bbb = _undefined === undefined ? 'hu' : _undefined;

console.log(aaa + bbb); // blackhu

var ccc = 'black',
    _ref = null,
    ddd = _ref === undefined ? 'hu' : _ref;

console.log(ccc + ddd); // blacknull

// 对象解构
var foo = void 0;
var _foo = { foo: 'black' };
foo = _foo.foo;

console.log(foo);

// 字符串解构

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    q = _hello2[0],
    w = _hello2[1],
    e = _hello2[2],
    r = _hello2[3],
    t = _hello2[4];

console.log(q);
console.log(w);