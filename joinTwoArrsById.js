const join = (arr1, arr2) => {
  const res = [...arr1, ...arr2].reduce((acc, curr) => {
    const key = curr["id"];
    acc[key] = { ...acc[key], ...curr };
    return acc;
  }, {});

  return Object.values(res);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
const res = join(arr1, arr2);

res[0].b.c = 23;

console.log(arr1);
console.log(arr2);
console.log(res);
