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
  fn: function (arg1, arg2) {
    console.log(this, arg1, arg2);
  },
};
const obj2 = {
  name: 'anushick',
};

const fn = obj.fn;

const callingFn = () => fn.apply(obj2, ['sample arg1', 'sample arg2']);
callingFn();
callingFn();

console.log(obj2);
