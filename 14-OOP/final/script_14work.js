'strict';
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Ezek történnek, ha egy függvényt a a new operátorral hívunk meg
// 1. Létrejön egy új üres objektum -–> {}
// 2. A new meghívja a Person függvényt, és a this-t beállítja az üres objektumra --> this = {}
// 3. Az üres objektum {} hozzákapcsolódik a prototípusához
// 4. A konstruktor visszaadja az először létrehozott üres objektumot, aminek most már nem kell üresnek lennie.

console.log(jonas instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'ember';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('ember'));

// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);

// osztály deklaráció/class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1986);
console.log(jessica.__proto__ === PersonCl.prototype);
// true
console.log('huhu');
console.log(jessica);
jessica.calcAge();
jessica.greet();

const account = {
  owner: jonas,
  movements: [200, 500, 100, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(`${this.firstName} ${2037 - this.birthYear} éves.`);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1970);
sarah.calcAge();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
