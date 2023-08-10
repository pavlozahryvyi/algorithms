//function take string param "abcd"
//return "AaaaBbbCcD"

const fizzBuzz = (n) => {
  return [...Array(n).keys()].map((el, idx) => {
    if ((idx + 1) % 3 === 0 && (idx + 1) % 5 === 0) return "FizzBuss";
    if ((idx + 1) % 3 === 0) return "Fizz";
    if ((idx + 1) % 5 === 0) return "Buzz";

    return (idx + 1).toString();
  });
};

console.log(fizzBuzz(15));
