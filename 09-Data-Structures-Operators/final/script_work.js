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
/*
//  ES6 szintaxis => külső objektum beágyazása
   openingHours,
 //  ES6 szintaxis => metódus írása
  order(startIndex, mainIndex) {// Ez a restaurant objektum tulajdonsága     return [this.starterMenu[startIndex], this
.mainMenu[mainIndex]];
//   },
// };
*/

// console.log(restaurant.openingHours);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [days[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [days[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [days[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
    },
    fri: {
      open: 11,
    },
    sat: {
      open: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Ez a restaurant objektum tulajdonsága
  vasarlasKiszallitas: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // A kiíratáshoz most van négy változónév
    console.log(`
        Rendelés érkezett ${time}-kor.
        Kiszállítási cím: ${address}
        ${this.starterMenu[starterIndex]} és ${this.mainMenu[mainIndex]}.`);
  },
};

// Rendelés érkezett 18:30-kor.
// Kiszállítási cím: Szabadkai ut 71.
//     Garlic Bread és Risotto.

restaurant.vasarlasKiszallitas({
  time: '18:30',
  address: 'Szabadkai ut 71.',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.vasarlasKiszallitas({
  address: 'Szabadkai ut 71.',
  starterIndex: 2,
});

// Kiíratás:
// Rendelés érkezett 20:00-kor.
// Kiszállítási cím: Szabadkai ut 71.
// Garlic Bread és Pizza.

// KiíratásZ {time: "18:30", address: "Szabadkai ut 71.", mainIndex: 2, starterIndex: 2}

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
//  Kiíratás: 23 7

// Kiíratás: script_work.js:106 [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Kiíratás: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// console.log(restaurant.openingHours?.mon);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`A ${day}-i napokon ${open}-kor nyitunk.`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'A metódus nem létezik');
// console.log(restaurant.orderValamit?.(0, 1) ?? 'A metódus nem létezik');

// const users = [{ ne: 'Pitju', mail: 'huhu@hehe' }];

// console.log(users[0]?.name ?? 'A tömb üres');

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

/*const arr = [1, 2, ...[3, 4]];
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


const menu = { ...starterMenu, ...mainMenu };
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}
*/
const guests = 0;
const guestCorrect = guests ?? 10;
console.log(guestCorrect);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Set
const orderSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);
// Kiíratás: Set(3) {"Pizza", "Pasta", "Risotto"}

console.log(new Set('Pitju'));
// Kiíratás: Set(5) {"P", "i", "t", "j", "u"}

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));

for (const order of orderSet) {
  console.log(order);
}
// Kiíratás: Pizza
//           Pasta
//           Risotto

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
// Kiíratás: 3

console.log(new Set('hevesipitju').size);
// Kiíratás: 9

// Map

const kocsma = new Map();
kocsma.set('nev', 'Harom tolgyfa');
kocsma.set(1, 'Szeged, Magyarország');
console.log(kocsma.set(2, 'Tatabánya, Magyarország'));

kocsma
  .set('Kulcsszavak', ['Magyaros', 'Organikus, Vegetariánus'])
  .set('Nyitva', 10)
  .set('Zárva', 24)
  .set(true, 'Nyitva vagyunk')
  .set(false, 'Zárva vagyunk');

// Kiíratás:
// Map(3) {"nev" => "Harom tolgyfa", 1 => "Szeged, Magyarország", 2 => "Tatabánya, Magyarország"}
// [[Entries]]
// 0: {"nev" => "Harom tolgyfa"}
// 1: {1 => "Szeged, Magyarország"}
// 2: {2 => "Tatabánya, Magyarország"}
// 3: {"Kulcsszavak" => Array(2)}
// 4: {"Nyitva" => 10}
// 5: {"Zárva" => 24}
// 6: {true => "Nyitva vagyunk"}
// 7: {false => "Zárva vagyunk"}

console.log(kocsma.get('nev'));
console.log(kocsma.get(true));
kocsma.delete();
// Kiíratás: törölni fogja a 'Tatabánya, Magyarországot'
console.log(kocsma.size);
// Kiíratás: 7 (property-k száma)

const arr = [1, 2];
kocsma.set(arr, 'Test');
console.log(kocsma.get(arr));
