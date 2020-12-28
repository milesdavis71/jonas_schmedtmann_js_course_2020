'use strict';

//  A szöveg minden karakterét kisbetűre veszi + kitörli a szpészeket.
const egySzoCsupaKisbetu = function (szoveg) {
  // A replace-ben egy reguláris kifejezés van, majd nézz utána.
  return szoveg.replace(/ /g, '').toLowerCase();
};

// Szóköznél Szpliteléssel szétbontja egy tömb elemeire a szöveget.
// A Rest pattern a tömb első elemének kivételével
// az összes többi elemet beleeszi egy tömbbe.
//  A join kiszedi a tömbből az egyes elemeket, és egy striget csinál belőle
// a zárójelben lévő karaktert pedig beszúrja a volt tömb elemek közé.
const elsoSzoCsupaNagybetu = function (szoveg) {
  const [elso, ...tobbiek] = szoveg.split(' ');
  return [elso.toUpperCase(), ...tobbiek].join(' ');
};

const atalakito = function (szoveg, fuggveny) {
  console.log(`Eredeti szöveg: ${szoveg}`);
  console.log(`Átalakított szöveg: ${fuggveny(szoveg)}`);
  console.log(fuggveny.name);
};

atalakito('KaKi KuKI Keki', elsoSzoCsupaNagybetu);
