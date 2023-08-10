//const fn = carry(sum)
//fn(1, 2, 3) = 6
//fn(1, 2) = 3
//fn(1)(2)(3)
//fn(1)(2,3)
//fn([1,2,3])

const carrySum = (...args) => {
  let counter = args.length;

  return (...x) => {
    console.log("---args", [...args, ...x]);
    console.log("---counter", counter);
    if (!x.length || [...args, ...x].length === counter) {
      const sum = args.reduce((acc, curr) => (acc += curr || 0), 0);
      console.log(sum);
      return sum;
    }
    return carrySum(...args, ...x);
  };
};

// carrySum(1, 2);
carrySum(1, 2)(3, 4)(5, 2)(7);
// carrySum([1, 2])();
