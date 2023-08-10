const chunkArray = (arr, size) => {
  let childArray = [];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (childArray.length < size) {
      childArray.push(arr[i]);
    }
    if (childArray.length === size || i === arr.length - 1) {
      res.push(childArray);
      childArray = [];
    }
  }

  return res;
};

console.log(chunkArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 4));
