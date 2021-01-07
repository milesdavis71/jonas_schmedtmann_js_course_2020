'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
*/
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Penzmozgas ${i + 1}:  ${mov > 0 ? 'Atutatlal' : 'Atutatlak'} ${Math.abs(
      mov
    )} forintot`
);
console.log(movementsDescriptions);
