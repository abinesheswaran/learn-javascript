class Human {
  firstName = 'NaN';
  age = 0;
  constructor(age, name) {
    this.firstName = name;
    this.age = age;
  }
  sayHello() {
    console.log('Hello...- my name is ' + this.firstName);
  }
  run() {
    if (this.age > 25)
      console.log('I am ' + this.age + ' years old... i cant run');
    else console.log(this.firstName + ' started running...');
  }
}

class Employee extends Human {
  firstName = 'abinesh';
  age = 25;
  gender = 'Male';
  constructor() {
    super(25, 'abinesh');
  }
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
abinesh.setName('Abinesh E');
abinesh.sayHello();
abinesh.run();

export function setupCounter() {}
