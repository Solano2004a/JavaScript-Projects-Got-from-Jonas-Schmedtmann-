const bookings = [];

const createBooking = function (flightNum = 7, numPassengers = 1, price = 200) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", undefined, 1000);

//passing objects as arguments in functions
const flight = "LH234";
const diego = {
  name: "Diego Solano",
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr" + passenger.name;

  if (passenger.passport === 12345678) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};
// checkIn(flight, diego);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(diego);
// checkIn(flight, diego);

//FUNCTIONS ACCEPTING CALLBACK FROM OTHER FUNCTIONS

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// //HIGHER-ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);

  console.log(`transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

//FUNCTIONS RETURNING OTHER FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//greeterHey is the function inside greet function
// const greeterHey = greet("Hey");
// greeterHey("Diego");
// greeterHey("Steven");

//it could be tha same as
// greet("Hello")("Diego"); //Hello Diego

// const greetArrow = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};
// greetArr("Hey")("Lucy");

const boa = {
  airline: "boa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    console.log(this.bookings);
  },
};

boa.book(239, "Diego Solano");
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// const book = boa.book;

// book(23, "Sarah Williams");//this does not work because the this keyword is pointing to the global object

// book.call(eurowings, 23, "Sarah Williams");
// console.log(boa);
// book.call(boa, 239, "Mary Cooper");
// console.log(boa);

//bind method
const booking = boa.book.bind(eurowings);
booking(23, "Sarah Williams");

const bookEW = booking.bind(eurowings, 23);
bookEW("Diego Smith");

//with event Listeners
boa.planes = 300;
boa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", boa.buyPlane.bind(boa));

//partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const taxVAT = addTax.bind(null, 0.23);
// console.log(taxVAT(100));

//Function returning aother function method
const addTax = (tax) => (amount) => {
  console.log(amount + amount * tax);
};
addTax(0.23)(100);

/////////////////////////////////////////////////////////////////
/////////////////////////CHALLENGE ZONE//////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'),
 which can be either 'string' or 'array'. If type is 'array', 
 simply display the results array as it is, using console.log(). 
 This should be the default option. If type is 'string', 
 display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
//1
const poll = {
  question: "Whats your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answer: new Array(4).fill(0),
  registerNewAnswer() {
    //get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option Number)`
      )
    );
    // console.log(answer);

    //register answer
    typeof answer === "number" &&
      answer < this.answer.length &&
      this.answer[answer]++;
    // console.log(this.answer);

    // this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answer);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answer.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults("array");

// BONUS TEST DATA 1: [5, 2, 3] => array
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1] => string
//We create a new object which 'this' is gonna obey
// poll.displayResults.call({ answer: [5, 2, 3, 4] }, "string");

//******************************************************************** */
///////////////////////// CLOSURES /////////////////////////////
//******************************************************************** */
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

//more examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

//re-assigned f function
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

//******************************************************************** */
///////////////////////// CHALLENGE ZONE /////////////////////////////
//******************************************************************** */

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  blu = function () {
    header.style.color = "blue";
  };
})();
//blu();
document.querySelector("body").addEventListener("click", blu);
