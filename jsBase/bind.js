const { log } = Math;
const logFn = (base, n) => log(n) / log(base);
const sumFn = (a) => (b) => a + b;

// Usage
// const lg = logFn.bind(null, 10);
// const ln = logFn.bind(null, Math.E);

// console.log("lg(5) = " + lg(5));
// console.log("ln(5) = " + ln(5));

const sum5 = sumFn.bind(null, 4);

console.log(sum5()(3));
