const compactObject = (obj) => {
  for (const el in obj) {
    if (!obj[el]) delete obj[el];
    if (Array.isArray(obj)) obj = obj.filter(Boolean);
    if (Array.isArray(obj[el])) obj[el] = obj[el].filter(Boolean);
    if (typeof obj[el] === "object") compactObject(obj[el]);
  }

  return obj;
};

// compactObject([1, 2, 3, [null]]);
// compactObject([null, undefined, 1]);

// compactObject({ a: 1, b: 2, c: 3, c: [0, 1] });

const compactObject2 = (obj) => {
  if (Array.isArray(obj) && obj.length) obj = obj.filter(Boolean);
  for (const key in obj) {
    if (typeof obj[key] === "object") obj[key] = compactObject2(obj[key]);
    if (!obj[key]) delete obj[key];
  }
  return obj;
};

let arr;

// arr = compactObject2([null, 0, [false], false, 1, { a: [false] }, null]);
arr = compactObject2([
  null,
  0,
  [1, false, { a: 1, b: null }],
  false,
  1,
  { a: [false] },
  null,
]);
// arr = compactObject2({
//   a: [false, 2, [undefined, 3]],
//   b: 2,
//   c: "str",
//   d: null,
// });

console.log(arr);
