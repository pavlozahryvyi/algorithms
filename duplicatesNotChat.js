function getDuplicatesAndUnique(arr) {
  const duplicatesArray = [];
  const uniqueArray = [];
  const frequencyMap = {};

  arr.forEach((item) => {
    if (!frequencyMap[item]) {
      frequencyMap[item] = 1;
      uniqueArray.push(item);
    } else if (frequencyMap[item] === 1) {
      const index = uniqueArray.indexOf(item);
      uniqueArray.splice(index, 1);
      duplicatesArray.push(item);
    }
  });

  return { duplicatesArray, uniqueArray };
}

const inputArray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const result = getDuplicatesAndUnique(inputArray);
console.log(result);
