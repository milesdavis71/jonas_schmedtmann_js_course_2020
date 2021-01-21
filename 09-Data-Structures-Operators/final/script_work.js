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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `A tésztád a következő összetevőkből áll: ${ing1}, ${ing2} és ${ing3}`
    );
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

// const tomb = [2, 3, 4];
// const [uu, , pp] = tomb;
// console.log(uu, pp);

// const tomb = [2, 3, 4];
// const [uu, , pp] = tomb;

// const ujTomb = [2, 3, 4];
// let [elso, , harmadik] = ujTomb;
// [elso, harmadik] = [harmadik, elso];
// console.log(elso, harmadik);

// const [eloetel, foetel] = restaurant.order(2, 0);
// console.log(eloetel, foetel);

// const gyumolcsosStand = ['alma', 'banán', 'barack'];
// const gyomolcsEladas = (elsoGyum, masodikGyum, harmadikGyum) => {
//   console.log(`Gyümölcsök: ${elsoGyum}, ${masodikGyum}, ${harmadikGyum}`);
// };
// gyomolcsEladas(...gyumolcsosStand);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const szoveg = 'Pitj';
// const betuk = [...szoveg, ' ', 'H.'];
// console.log(betuk);
// // Kiírás: ["P", "i", "t", "j", " ", "H."]
// console.log(...szoveg);
// // Kiírás: P i t j
// console.log(`${...szoveg} Hevesi`);

// const ingredients = [
//   prompt('Készítsd el a saját pizzádat! Első összetevő: '),
//   prompt('Második összetevő:'),
//   prompt('Harmadik összetevő:'),
// ];
// restaurant.orderPasta(...ingredients);

// const newREstaurant = { ...restaurant, founder: 'Jaki' };
// console.log(newREstaurant);

const arr = [1, 2, ...[3, 4]];
console.log(arr);
// Kiíratás: (4) [1, 2, 3, 4]

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// Kiíratás: (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
