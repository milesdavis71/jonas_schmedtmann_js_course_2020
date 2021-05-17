class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`${2037 - this.birthYear} vagyokk.`);
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`${this.firstName} vagyok, ${this.course} tanulok`);
  }
}

const pitju = new StudentCl('Pitju', 1971, 'Programozó');
pitju.calcAge();
pitju.introduce();
