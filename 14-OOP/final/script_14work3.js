const PersonProto = {
  calcAge() {
    console.log(`${2037 - this.birthYear} vagyok.`);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`${this.firstName} vagyok, ${this.course}t tanulok`);
};

const pitju = Object.create(StudentProto);
pitju.init('Pitju', 1971, 'Progeamozás');
pitju.calcAge();
pitju.introduce();
