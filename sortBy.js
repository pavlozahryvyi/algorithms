const sortBy = (arr, fn) => arr.sort((a, b) => fn(b) - fn(a));

// Input:
// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
// const fn = (d) => d.x;

const arr = [5, 4, 1, 1, 2, 3];
const fn = (x) => x;

console.log(sortBy(arr, fn));
