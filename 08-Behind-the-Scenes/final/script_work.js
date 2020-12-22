'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, ${age} éves vagy, ${birthYear}-ben születtél.`;
    var hetvenes = true;
    console.log(output);

    if (birthYear >= 1970 && birthYear <= 1980) {
      // Mivel a const hatóköre az if blokkon belül van, ezért probléma nélkül
      // lehet ugyanazt a változónevet megadni, a hatókör láncba nem fog beleszólni.
      const firstName = 'Pitta';
      // const/let nélkül viszont újradefiniálható a block hatókörön belüli változó („output”)
      // a printAge() függvény hatókörében vagyunk, amiben az if blokkban
      // új értéket ahatunk hozzá az „output” változóhoz.
      output = 'New Output';
    }
    const str = `${firstName}, hetvenes vagy...`;
    console.log(str);
  }
  console.log(output);
  // Függvény meghívása
  printAge();
  // Visszatérési érték
  return age;
}
const firstName = 'Pitju';
calcAge(1971);
// A calcAge funckióban lévő "age" változó NEM érhető el a global scope-ból.
// console.log(age);
// printAge();
