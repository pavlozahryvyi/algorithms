const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const duplicatesNot = (arr) => {
  const duplicatesArray = [];
  const uniqueArray = [];

  const res = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  for (const key in res) {
    if (res[key] >= 2) duplicatesArray.push(key);
    else uniqueArray.push(key);
  }

  return { duplicatesArray, uniqueArray };
};

const duplicatesNot2 = (arr) => {
  const duplicatesArray = [];
  const uniqueArray = [];
  const mappedObj = {};

  arr.forEach((item) => {});

  return { duplicatesArray, uniqueArray };
};

console.log(duplicatesNot2(source));
