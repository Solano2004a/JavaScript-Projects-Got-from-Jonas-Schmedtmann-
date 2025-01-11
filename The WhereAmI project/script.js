"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//LOADING DATA WITHOUT A SEQUENCE
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   //background
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Object.values(data.currencies)[0].name

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//     <p class="country__row"><span>💰</span>${
//       Object.values(data.currencies)[0].name
//     }</p>
//       </div>
//       </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("usa");
// getCountryData("brazil");
// getCountryData("south korea");
// getCountryData("norway");
// // getCountryData("denmark");

////////////////////////////////////////
//LOADING DATA WITH A SEQUENCE

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
      </div>
      </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   //background
//   //AJAX CALL country 1
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Object.values(data.currencies)[0].name
//     //Render country 1
//     renderCountry(data);

//     //Get neighbour country 2
//     // let neighbour;
//     for (let i = 0; i < data.borders.length; i++) {
//       const neighbour = data.borders?.[i];
//       console.log(neighbour);
//       if (!neighbour) return;
//       // const neighbour = data.borders?.[(0)..data.borders.length - 1];

//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener("load", function () {
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);

//         renderCountry(data2, "neighbour");
//       });
//     }
//   });
// };

// getCountryAndNeighbour("germany");
// // getCountryData("brazil");
// // getCountryData("south korea");
// // getCountryData("norway");
// // getCountryData("denmark");

////////////////////////////////////////
//MODERN WAY TO MAKE CALLBACKS: PROMISES AND FETCH API
////////////////////////////////////////

//OLD AJAX CALL
// const request = new XMLHttpRequest();
// //   //background
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//MODERN AJAX CALL
// const request = fetch(`https://restcountries.com/v3.1/name/usa`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     });
// };

//SIMPLY VERSION OF WHAT'S ABOVE

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       //showing error message
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       for (let i = 0; i < data[0]?.borders.length; i++) {
//         const neighbour = data[0]?.borders?.[i];
//         if (!neighbour) return;
//         fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//           .then((response) => response.json())
//           .then((neighbour) => renderCountry(neighbour[0], "neighbour"));
//       }
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//Finally is used when we have to show something or
// do something, no matter y the promise is fullfilled
// or an error ocurred

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((neighbour) => renderCountry(neighbour[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     });
// };
//is not a good practice to have .then function inside another .then function
//that's what we call "CALLBACK HELL"

//CODING WORKING ***********************************************
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       // console.log(data[0]);
//       if (!data[0].borders) throw new Error("No neighbour found!");
//       for (let i = 0; i < data[0]?.borders.length; i++) {
//         const neighbour = data[0]?.borders?.[i];
//         if (!neighbour) return;
//         fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//           .then((response) => response.json())
//           .then((neighbour) => renderCountry(neighbour[0], "neighbour"));
//       }
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });

//EVENT LOOP IN PRACTICE ***********************************************
//LOOKING WHICH EVENT IS GOING TO RUN FIRST
// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

//BUILDING A SIMPLE PROMISE ***********************************************
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening 🔮");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`YOU WIN`);
    } else {
      reject(new Error(`YOU LOST`));
    }
  }, 2000);
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
//WE WILL RETURN A PROMISE:PROMISIFYING setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
  // return setTimeout(`I waited for ${seconds} sec`, seconds * 1000);
};

// wait(1)
//   .then(function () {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("2 seconds passed");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("3 seconds passed");
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 3 sec`));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2).then(() => console.log(`I waited for 2 seconds`));

// Promise.resolve(`you win!`).then((x) => console.log(x));
// Promise.reject(`You lost, try again!`).catch((err) => console.error(err));

//PROMISIFYING THE GEOLOCATION API ***********************************************
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position = resolve(position)),
    //   (err = reject(err))
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getLocation().then((pos) => whereAmI(pos));
////////////////////////////////////////////////////////////////
////////////////////// CHALLENGE ZONE ///////////////////////////
////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

//part1
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((message) => message.json())
    .then((data) => {
      if (!data) return `Nothing were passed`;
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v3.1/alpha/${data.countryCode}`);
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch((err) => console.error(`${err} 💥💥💥`));
};
// whereAmI(-17.7819, -63.1915);
