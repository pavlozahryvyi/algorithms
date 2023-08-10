/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
  let tmp = n;
  return function () {
    console.log("---tmp ", tmp);
    return tmp++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

// let a = 5;
// console.log(++a);
// a = 5;
// console.log(a++);
// console.log(a);
