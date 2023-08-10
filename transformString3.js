//function take string param "abcd"
//return "AaaaBbbCcD"

const transform = (str) => {
  const strArray = str
    .split("")
    .map(
      (el, idx, arr) => `${el.toUpperCase()}${el.repeat(arr.length - idx - 1)}`
    )
    .join("");

  console.log(strArray);
};

transform("abcd");
