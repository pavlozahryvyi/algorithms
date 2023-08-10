const customFn = (element) => {
  //   return element;
  //   return String(element < 5);
  return element[0];
};

Array.prototype.groupBy = function (fn) {
  const resObj = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (resObj[key]) {
      resObj[key].push(this[i]);
    } else {
      resObj[key] = [this[i]];
    }
  }

  return resObj;
};

// console.log([1, 2, 3, 4, 5].groupBy(customFn));

console.log(
  [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
  ].groupBy(customFn)
);
