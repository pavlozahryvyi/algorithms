//function take string param "DunYweMY48"
//return "D+unY+weM+Y+48"

const transform = (str) => {
  const arr = str.split("");

  const nextArr = arr.map((el) =>
    el === el.toUpperCase() && !Number(el) && el !== arr.at(-1) ? `${el}+` : el
  );

  console.log(nextArr.join(""));
};

transform("DunYweMY48");
