const reduce = (nums, fn, init) => {
  if (!nums.length) return init;

  let accum = init;

  nums.forEach((item) => {
    accum = fn(accum, item);
  });

  return accum;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr * curr;
};
const init = 100;

console.log(reduce(nums, fn, init));
