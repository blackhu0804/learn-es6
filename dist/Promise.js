'use strict';

var state = 1;

function step1(resolve, reject) {
  console.log('1.洗菜做饭');
  if (state == 1) {
    resolve('1...完成');
  } else {
    reject('1...没完成');
  }
}

function step2(resolve, reject) {
  console.log('2.吃饭');
  if (state == 1) {
    resolve('2...完成');
  } else {
    reject('2...没完成');
  }
}

function step3(resolve, reject) {
  console.log('3.洗碗');
  if (state == 1) {
    resolve('3...完成');
  } else {
    reject('3...没完成');
  }
}

new Promise(step1).then(function (val) {
  console.log(val);
  return new Promise(step2);
}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
});