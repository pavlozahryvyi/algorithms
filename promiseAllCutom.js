const promiseAll = (promiseFns) => {
  const arrayRes = [];

  return new Promise((resolve, reject) => {
    promiseFns.forEach((promise, idx) => {
      promise()
        .then((res) => {
          arrayRes.push(res);
          if (arrayRes.length === promiseFns.length) {
            resolve(arrayRes);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
])
  .then((response) => console.log("---response", response))
  .catch((err) => console.log("---some err", err));

//worked version as we set to new result arr by index
//and check each el to undefined
//to prevent result with undefined values
function promiseAll(promises) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise()
        .then((response) => {
          results[idx] = response;
          if (
            results.length === promises.length &&
            !results.includes(undefined)
          ) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
