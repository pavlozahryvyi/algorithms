/**
 * @param {Function} fn
 */

function memoize(fn) {
  const res = {};
  let callCount = 0;
  return function (...args) {
    const argsStr = [...args].join();

    if (!argsStr) return callCount;

    if (typeof res[argsStr] === "number") return res[argsStr];

    callCount++;
    res[argsStr] = fn(...args);
    return res[argsStr];
  };
}

// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });

// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);

memoizedSum(0, 0); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(0, 0); // Returns 4. However sum() was not called because the same inputs were seen before.
memoizedSum(0, 0); // Returns 3. sum() was called as (1, 2) was not seen before.
console.log(memoizedSum());

// memoFactorial(2); // Returns 2.
// memoFactorial(3); // Returns 6.
// memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
// memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
memoFactorial();
