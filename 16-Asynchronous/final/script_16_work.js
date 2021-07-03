'use strict';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// then-nel
// const getJSON = function (url, errorMsg = 'Hiba.') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// async-kel
const getJSON = async function (url, errorMsg = 'Hiba.') {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
  const data = await response.json();
  return data;
};

////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('usa');
getCountryData('hungary');
getCountryData('germany');
*/

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country 2 (neighbour)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX call country 2 (neighbour)
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('portugal');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('hungary');

// const getJSON = function (url, errorMsg = 'Valami nem jó.') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = 'sfgdsfg';
//       // const neighbour = 'data[0].borders[0]';

//       if (!neighbour) throw new Error('Ennek az országnak nincs szomszédja.');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'A megadott ország nem található.'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Valami nem jó. ${err.message} Próbáld meg újra.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// const getCountryData = function (country) {};
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++);
//   console.log(rest);
// });
// console.log('Test end');

// Async/await
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const resGeo = await fetch(
//       'https://api.ip2loc.com/5mfjHIKWofkYx7aFgEyPZa63HACTagM3/detect?include=country_name'
//     );
//     if (!resGeo.ok) throw new Error('Beolvasási hiba.');
//     const dataGeo = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country_name}`
//     );
//     if (!res.ok) throw new Error('Nincs ilyen zene.');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `Itt vagy: ${dataGeo.country_name} ország`;
//   } catch (err) {
//     console.error(err);
//     renderError(err.message);
//     throw err;
//   }
// };
// console.log('1: Ország meghatározása kezdődik.');
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err}`);
//   }
//   console.log('3: Ország meghatározása kész.');
// })();

// 'https://api.ip2loc.com/5mfjHIKWofkYx7aFgEyPZa63HACTagM3/detect?include=country_name'
// `https://restcountries.eu/rest/v2/name/${dataGeo.country_name_}`

// const get3countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3countries('hungary', 'turkey', 'romania');

// Race
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Túl hosszú'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON('https://restcountries.eu/rest/v2/name/hungary'),
  timeout(1),
])
  .then(res => console.log(res[0].capital))
  .catch();
