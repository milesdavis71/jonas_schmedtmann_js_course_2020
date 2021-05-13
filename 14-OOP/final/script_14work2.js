const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer sciencce');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Person);
