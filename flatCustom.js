const flat = (arr, n) => {
  const result = [];

  arr.forEach((element) => {
    if (Array.isArray(element) && n) {
      result.push(...flat(element, n - 1));
    } else {
      result.push(element);
    }
  });

  return result;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 1;

const res = flat(arr, n);

console.log("---res", res);
