// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   // openingHours,
// };

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   // a nap neve helyett a „weekdays” tömbből adjuk meg a megfelelő elemet
//   // szögletes zárójelben.
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //  ES6 szintaxis => külső objektum beágyazása
//   openingHours,

//   //  ES6 szintaxis => metódus írása
//   order(startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(restaurant.openingHours);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant.openingHours?.mon);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`A ${day}-i napokon ${open}-kor nyitunk.`);
// }

console.log(restaurant.order?.(0, 1) ?? 'A metódus nem létezik');
console.log(restaurant.orderValamit?.(0, 1) ?? 'A metódus nem létezik');

const users = [{ ne: 'Pitju', mail: 'huhu@hehe' }];

console.log(users[0]?.name ?? 'A tömb üres');

// const kor = 18;
// kor >= 18 ? console.log('Sört iszok.') : console.log('Vizet iszok');

// const age = 20;
// console.log(`${age >= 20 ? 'Sört iszok.' : 'Vizet iszok.'}`);

// const text = '';
// console.log(`${text ? 'truthy' : 'falsy'}`);

// console.log(0 || 'Pitju');
