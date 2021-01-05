'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
  if (movement > 0) {
    console.log(`Betettél ${movement} forintot`);
  } else {
    console.log(`Kivettél ${Math.abs(movement)} forintot`);
  }
});

//  0: function(200);
//  1: function(450);
//  2: function(-400);
//  3: function(3000);
