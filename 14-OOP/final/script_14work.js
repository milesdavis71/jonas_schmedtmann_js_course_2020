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
