class Employee {
  firstName = 'abinesh';
  age = 25;
  gender = 'Male';
  setName(nameVal) {
    this.firstName = nameVal;
    this.getAll();
  }
  setAge = (ageVal) => {
    this.age = ageVal;
    this.getAll();
  };
  getAll = function () {
    console.log(this.firstName, this.age, this.gender, this.location);
  };
}

Employee.prototype.location = 'Bangalore';
Employee.prototype.setLocation = function (val) {
  this.location = val;
  this.getAll();
};
Employee.prototype.setGender = function (val) {
  this.gender = val;
  this.getAll();
};

const abinesh = new Employee();
abinesh.getAll();
abinesh.setName('Abinesh E');
abinesh.setAge(26);
abinesh.setGender('Angry Male');
abinesh.setLocation('Brookfield Bangalore');
abinesh.firstName = 'NaN';
abinesh.getAll();

console.log(abinesh);

export function setupCounter() {}
