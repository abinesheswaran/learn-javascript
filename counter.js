export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

const promise = new Promise((resolve, reject) => {
  if (Math.round(Math.random() * 10) > 5)
    setTimeout(() => reject(new Error('Error Error!!')), 500);
  else setTimeout(() => resolve('Super cool... promise resolving'));
});

setTimeout(() => {
  console.log(promise);
}, 600);

promise
  .then(() => {
    console.log('Promise resolved...');
  })
  .catch((err) => {
    console.log(err);
  });
console.log(promise);

Promise.resolve().then(() => {
  console.log('Promise resolved by Promise.resolve()');
});
Promise.reject().then(() => {
  console.log('Promise Rejected by Promise.reject()');
});

//race
const p1 = Promise.resolve('p1 resolved');
const p2 = Promise.reject('p2 resolved');
const p3 = Promise.resolve('p3 resolved');

const res1 = await Promise.allSettled([p1, p2, p3]);
const res2 = await Promise.all([p1, p2, p3]);
const res3 = await Promise.race([p1, p2, p3]);
console.log(res1, res2, res3);
