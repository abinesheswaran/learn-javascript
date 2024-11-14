export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

const obj = {
  name: 'abinesh',
  fn: function () {
    console.log(this);
  },
};
const obj2 = {
  name: 'anushick',
};
obj2.fn = obj.fn;
obj.fn();
obj2.fn();
const fn = obj.fn;
fn();
