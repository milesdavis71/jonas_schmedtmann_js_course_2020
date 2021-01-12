'use strict';
const movements = [-200, 450, -400, 3000, -650, -130, 70, 1300];
/*
console.log('–––– for loop ––––');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`Betettél ${movement} forintot`);
  } else {
    console.log(`Kivettél ${Math.abs(movement)} forintot`);
  }
}

console.log('–––– forEach loop ––––');
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Forgalom: ${i + 1}: Betettél ${mov} forintot`);
  } else {
    console.log(`Forgalom: ${i + 1}: Kivettél ${Math.abs(mov)} forintot`);
  }
});

//  0: function(200);
//  1: function(450);
//  2: function(-400);
//  3: function(3000);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Penzmozgas ${i + 1}:  ${mov > 0 ? 'Atutatlal' : 'Atutatlak'} ${Math.abs(
      mov
    )} forintot`
);
console.log(movementsDescriptions);

// Max érték
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

*/
const totalDepositsToForint = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 292)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsToForint);

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);
