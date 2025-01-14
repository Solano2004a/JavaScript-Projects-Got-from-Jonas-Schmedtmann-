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
// getLocation().then((pos) => whereAmI(pos));

//USING THE ASYNC AWAIT FUNCTIONS
const whereAmi = async function () {
  try {
    //Geolocation
    const pos = await getLocation();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // console.log(`You are in ${dataGeo.city}, ${dataGeo.countryName}`);
    //Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${dataGeo.countryCode}`
    );
    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err} 💥`);
    throw err;
  }
};

// console.log("1: will get location");
// whereAmi()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(console.log("3:finished getting"));
// btn.addEventListener("click", whereAmi);

// whereAmi();
(async function () {
  try {
    console.log("1: will get location");
    const city = await whereAmi();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log("3:finished getting");
});

//RUNNING PROMISES IN PARALLEL

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [res1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [res2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [res3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([res1.capital, res2.capital, res3.capital].join(", "));
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log([data.map((d) => d[0].capital)].join(", "));
  } catch (err) {
    console.error(err);
  }
};
// get3Countries("portugal", "canada", "tanzania");

//OTHER PROMISE COMBINATORS
//PROMMISE.RACE
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/france`),
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
});

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(`Time have passed`);
    }, sec * 1000);
  });
};

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/jamaica`),
//   timeout(0.01),
// ])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.error(err));
// timeout(3);

//PROMISE.ALLSETTLED
// Promise.allSettled([
//   Promise.resolve("success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.ANY
// Promise.any([
//   Promise.resolve("success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
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

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) 
and sets the .src attribute to the provided image path. When the image is done loading, 
append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there is an error
 loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
let image;

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", function () {
      document.body.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
// createImage("img/img-1.jpg")
//   .then(() => wait(2))
//   .then(() => {
//     // const image = document.querySelector("img");
//     image.style.display = "none";
//   })
//   .then(() => wait(2))
//   .then(() => {
//     createImage("img/img-2.jpg");
//   })
//   .then(() => wait(2))
//   .then(() => {
//     // image = document.querySelector("img");
//     image.style.display = "none";
//   });
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed).
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
// let image;

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     image = document.createElement("img");
//     image.src = imgPath;
//     image.addEventListener("load", function () {
//       document.body.appendChild(image);
//       resolve(image);
//     });
//     image.addEventListener("error", function () {
//       reject(new Error("Image not found"));
//     });
//   });
// };
// createImage("img/img-1.jpg")
//   .then(() => wait(2))
//   .then(() => {
//     // const image = document.querySelector("img");
//     image.style.display = "none";
//   })
//   .then(() => wait(2))
//   .then(() => {
//     createImage("img/img-2.jpg");
//   })
//   .then(() => wait(2))
//   .then(() => {
//     // image = document.querySelector("img");
//     image.style.display = "none";
//   });

let img;
const loadNPause = async function () {
  try {
    img = await createImage("img/img-1.jpg");
    await wait(2);
    img.style.display = "none";
    await wait(2);
    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err.message);
  }
};
// loadNPause();
//PART II
// let imagen;
const containerImage = document.querySelector(".images");
const createimage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.className = "parallel";
    image.src = imgPath;
    containerImage.append(image);
    image.addEventListener("load", function () {
      console.log(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
const loadAll = async function (arrImgs) {
  await arrImgs.map(createimage);
};
const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
loadAll(imgArr);
// createimage("img/img-1.jpg");

// const imageContainer = document.querySelector(".images");
// const createimage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const imagen = document.createElement("img");
//     imagen.src = imgPath;
//     imagen.className = "parallel";
//     imagen.addEventListener("load", function () {
//       imageContainer.append(imagen);
//       resolve(imagen);
//     });
//     imagen.addEventListener("error", function () {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// const loadAll = async function (imgArr) {
//   const imgs = await imgArr.map(createimage);
//   // imageContainer.append(imgs);
//   console.log(imgs);
// };
// const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
// loadAll(imgArr);
