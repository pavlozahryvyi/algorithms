const addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve) => {
    const resArr = 0;
    console.log(arguments);
    for (const promise of arguments) {
      promise.then((res) => {
        resArr.push(res);
        if (resArr.length == 2) {
          resolve(resArr[0] + resArr[1]);
        }
      });
    }
  });
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log); // 4
