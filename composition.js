/**
 * @param {Function[]} functions
 * @return {Function}
 */
export const compose = function (functions) {
  return function (x) {
    if (!functions.length) return x;

    return functions.reverse().reduce((acc, curr) => {
      return curr(acc);
    }, x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
