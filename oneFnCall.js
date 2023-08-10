const once = (fn) => {
  let isCalled = false;

  return (...args) => {
    if (isCalled) return;
    isCalled = true;
    return fn(...args);
  };
};

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
