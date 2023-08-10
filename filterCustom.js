/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

filter([0, 10, 20, 30], (n) => n < 10);
