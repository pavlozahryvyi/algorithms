function promiseAll(promises) {
  let results = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise()
        .then((response) => {
          results[idx] = response;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
])
  .then((response) => console.log("---response", response))
  .catch((err) => console.log("---some err", err));
