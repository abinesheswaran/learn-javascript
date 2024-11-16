class Employee {
  firstName = 'abinesh';
  age = 25;
  setName = function (nameVal) {
    this.firstName = nameVal;
    this.getAll();
  };
  setAge = (ageVal) => {
    this.age = ageVal;
    this.getAll();
  };
  getAll = function () {
    console.log(this.firstName, this.age);
  };
}

const abinesh = new Employee();
abinesh.getAll();
abinesh.setName('Abinesh E');
abinesh.setAge(26);
abinesh.firstName = 'NaN';
abinesh.getAll();

console.log(abinesh);

export function setupCounter() {}
