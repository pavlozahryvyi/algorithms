//function take number param 5681
//return "5000 + 600 + 80 + 1"

const transform = (num) => {
  const strArray = num
    .toString()
    .split("")
    .map((el, idx, arr) => `${el}${"0".repeat(arr.length - idx - 1)}`)
    .join(" + ");

  console.log(strArray);
};

transform(5681);
