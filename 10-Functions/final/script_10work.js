'use strict';

//  A szöveg minden karakterét kisbetűre veszi + kitörli a szpészeket.
const szokozKiszedCsupaKisbetu = function (szoveg) {
  // A replace-ben egy reguláris kifejezés van, majd nézz utána.
  return szoveg.replace(/ /g, '').toLowerCase();
};

// Szóköznél Szpliteléssel szétbontja egy tömb elemeire a szöveget.
//
const elsoSzoCsupaNagybetu = function (szoveg) {
  const [...tobbiek] = szoveg.split(' ');
  return [...tobbiek];
};

const atalakito = function (szoveg, fuggveny) {
  console.log(`Eredeti szöveg: ${szoveg}`);
  console.log(`Átalakított szöveg: ${fuggveny(szoveg)}`);
  console.log(fuggveny.name);
};

atalakito('KaKi KuKI', elsoSzoCsupaNagybetu);
