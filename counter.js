class Employee {
  firstName = 'abinesh';
  age = 25;
  gender = 'Male';
  setName = function (nameVal) {
    this.firstName = nameVal;
    this.getAll();
  };
  setAge = (ageVal) => {
    this.age = ageVal;
    this.getAll();
  };
  getAll = function () {
    console.log(this.firstName, this.age, this.gender);
  };

  //Correct getters and setters
  get gender() {
    return this.gender;
  }
  set genderVal(val) {
    this.gender = val + '.';
    this.getAll();
  }

  //Static methods
  static sayHi() {
    console.log(this);
    console.log('Hi...!!!');
  }
}

const abinesh = new Employee();
abinesh.getAll();
abinesh.setName('Abinesh E');
abinesh.setAge(26);
abinesh.firstName = 'NaN';
abinesh.getAll();
console.log(abinesh.gender);
abinesh.genderVal = 'Arogent Male';
console.log(abinesh);
Employee.sayHi();

export function setupCounter() {}
