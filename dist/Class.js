'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  _createClass(Person, [{
    key: 'name',
    value: function name(val) {
      return val;
    }
  }, {
    key: 'skill',
    value: function skill(val) {
      console.log(this.name('black') + '：' + val);
    }
  }]);

  function Person(a, b) {
    _classCallCheck(this, Person);

    // 传参
    this.a = a;
    this.b = b;
  }

  _createClass(Person, [{
    key: 'add',
    value: function add() {
      return this.a + this.b;
    }
  }]);

  return Person;
}();

var person = new Person(1, 2);
person.skill('web'); // black：web
console.log(person.add()); // 3

var student = function (_Person) {
  _inherits(student, _Person);

  function student() {
    _classCallCheck(this, student);

    return _possibleConstructorReturn(this, (student.__proto__ || Object.getPrototypeOf(student)).apply(this, arguments));
  }

  return student;
}(Person);

var xiaoming = new student();
xiaoming.skill('learn'); // black：learn