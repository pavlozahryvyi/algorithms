/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const nextArr = [...arr];

  for (let i = 0; i < nextArr.length; i++) {
    nextArr[i] = fn(nextArr[i]);
    console.log(nextArr[i]);
  }

  return nextArr;
};

map([1, 2, 3], (n) => n + 1);
