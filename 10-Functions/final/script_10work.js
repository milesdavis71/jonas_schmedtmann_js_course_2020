'use strict';
/*
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


let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

const beszallas = function (utasszam, varakozas) {
  const csoportraBontas = utasszam / 3;

  // A kesleltetes callback függvény két paramétert fogad, egy anoním függvényt és egy értéket
  setTimeout(function () {
    console.log(`A ${utasszam} utas beszállása megkezdődik`);
    console.log(`Mindegyik csoportban ${csoportraBontas} utas van.`);
  }, varakozas * 1000);

  console.log(`A bejelentkezés  ${varakozas} másodpercen belül elkezdődik.`);
};

beszallas(90, 3);


// A külső függvényben a lezárásban a
(function (arguments) {})()(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

// IIFE kétféle szintaxisa:
(function () {
  console.log('Csak egyszer fut le');
})();

// És működik nyíl függvényként is
(() => console.log('Ez is csak egyszer fut le.'))();
