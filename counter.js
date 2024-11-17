export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

function sample(i) {
  if (i < 6) throw Error('This is sample error ***!!! ' + i);
  else return i;
}

setInterval(() => {
  try {
    const i = Math.round(Math.random() * 10);
    const n = sample(i);
    console.log(n);
  } catch (err) {
    console.log(err);
  }
}, 500);
