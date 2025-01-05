'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

let [, , thirdbook] = books;

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

let [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

const { language, programmingLanguage = 'unkown' } = books[6];

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]); //this s an object destructuring
// console.log(bookTitle, bookAuthor);

// let bookRating = 'unknown';
// ({
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0]);

//or
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// console.log(bookRating); //4.41
// console.log(books[0].title);

// function printBookInfo({ title, author, year }) {
//   if (year === undefined) {
//     year = 'unknown';
//     console.log(`${title} by ${author}, year (${year})`);
//   }
//   console.log(`${title} by ${author}, (${year})`);
// }

// function printBookInfo({ title, author, year = 'unknown' }) {
//   console.log(`${title} by ${author}, year ${year}`);
// }

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
// });

/*  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },*/

//LOGICAL ASSIGMENT OPERATORS
// console.log(`books without edition atributte before:`);
// for (let i = 0; i < books.length; i++) {
//   if (books[i].edition === undefined) {
//     books[i].edition ??= 1;
//     console.log(books[i].title);
//   }
// }
// console.log(`books with rating below 4.2:`);
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }
/*REST PATTERN AND PARAMETERS */
// const [mainKeyword, ...rest] = books[0].keywords;
// // console.log(mainKeyword, rest);
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// // console.log(bookPublisher, restOfTheBook);

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// const bookAuthors = [...books[0].author, ...books[1].author];
// // console.log(bookAuthors);
// function spellWord(word) {
//   return [...word];
// }
// console.log(spellWord('hello'));

//functions that recieves multiple arguments
// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(1, 2);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// THE AND OR OPERATORS

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java';
// }
// // console.log(hasExamplesInJava(books[1])); //true

// for (i = 0; i < books.length; i++) {
//   // if (books[i].onlineContent == true) {
//   //   console.log(`books[i].title provides online content`);
//   // }
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
//   books[i].onlineContent ??
//     console.log(`${books[i].title} does not provide online content`);
// }
//Nullish: null and undefined (NOT 0 or '')

// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); //Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// const guests1 = restaurant.numGuests || 10;
// console.log(guests1); //10

// console.log(0 && 'Jonas'); //0
// console.log(7 && 'Jonas'); //Jonas

// console.log('Hello' && 23 && null && 'jonas'); //null

//********************************* LOOPING ARRAYS: THE FOR-OF LOOP ********************/

//8.1
// let page = 0;
// for (const book of books) {
//   page += book.pages;
//   //console.log(page);
// }
// // console.log(page);
// //8.2
// const allAuthors = [];
// for (const book of books) {
//   Array.isArray(book.author)
//     ? allAuthors.push(...book.author)
//     : allAuthors.push(book.author);
//   // if (Array.isArray(book.author)) {
//   //   allAuthors.push(...book.author);
//   // } else {
//   //   allAuthors.push(book.author);
//   // }
// }
// // console.log(allAuthors);
// //8.3
// for (const [i, book] of books.entries()) {
//   console.log(`${i + 1}: ${book.title}`);
// }

//********************************* ENHANCED OBJECT LITERALS ********************/
//9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

let newBook = {};
for (let i = 0; i < bookData.length; i++) {
  const [key, value] = bookData[i];
  newBook[key] = value;
}
// console.log(newBook);

//9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
// console.log(newBook2);

//***************************** OPTIONAL CHAINNING (?.) **************************** */
function getFirstKeyword(book) {
  return book?.keywords?.[0] ?? 'No keywords';
}
// console.log(getFirstKeyword(books[4]));

//***************************** LOOPING OBJECTS: KEYS, VALUES, AND ENTRIES **************************** */
//11.1
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

//11.2
for (const [index, values] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(values);
}
// console.log(entries);

//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
// for (const [key, value] of Object.entries(books[0].thirdParty.goodreads)) {
//   entries2.push([key, value]);
// }
// console.log(...entries2);

//****************************** SETS *********************************** */
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(staff).size);
// console.log(new Set('diegosolano').size);

const allKeywords = [];
for (let i = 0; i < books.length; i++) {
  allKeywords.push(...books[i].keywords);
}
const uniqueAllKeywords = new Set(allKeywords);
// console.log(uniqueAllKeywords);
uniqueAllKeywords.add('coding');
uniqueAllKeywords.add('science');
uniqueAllKeywords.delete('business');
uniqueAllKeywords.clear();

//*********************************** NEW OPERATORS TO MAKE SETS USEFUL ************************** */
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonfoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', ...commonfoods);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', ...italianMexicanFusion);

//same as
const italianMexicanFusion2 = new Set([...italianFoods, ...mexicanFoods]);

//returns the unique elements of the first element that are not present in the second element
const uniqueItalianFoods = italianFoods.difference(mexicanFoods); //same as \\ in haskell

//returns the unique elements of the first element and unique elements of the second element
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

//*********************************** MAPS: FUNDAMENTALS ************************** */
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// console.log(rest.get('name'));

const time = new Date();
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories')); //true
rest.delete(2);
// console.log(rest.size); //7

//*************** ARRAYS OR OBJECTS AS MAP KEYS ************************** */
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //this is not going to work => [1,2] value is not the same in the heap as [1,2] key (undefined)
//instead, we should do this
const arr = [1, 2];
rest.set(arr, 'Test');
// console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// //13.1
// // const array = ['title', 'Clean Code'];
// // const book = new Map();
// // book.set(array, ['author', 'Robert C. Martin']);
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// //13.2
// bookMap.set('pages', 464);
// console.log(bookMap);

// //13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// //13.4
// console.log(bookMap.size);
// //13,5
// console.log(
//   `The author of the book is ${bookMap.has('author') ? 'known' : 'unknown'} `
// );

///***************************** MAPS: ITERATION ************************** */
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

// convert object to map
const hoursMap = new Map(Object.entries(bookData));
// console.log(hoursMap);

// //DESCTRUCTURING MAPS
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(question.get(question.get('correct') == answer));

// //convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//***************************** WORKING WITH STRINGS ************************** */
// const airline = 'TAP Air Portugal';
// console.log(airline.indexOf('r')); //6
// console.log(airline.lastIndexOf('r')); //10
// console.log(airline.slice(4)); //Air Portugal
// console.log(airline.slice(4, 7)); //Air
// console.log(airline.slice(-2)); //al

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You are in the middle seat`);
  else console.log(`you are not in the middle seat`);
};
// checkMiddleSeat('23C');
// checkMiddleSeat('1A');
// checkMiddleSeat('28F');
// checkMiddleSeat('23B');

//***************************** WORKING WITH STRINGS PART 2 ************************** */
const passenger = 'DiEgO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//comparing emails
const email = 'hello@diego.io';
const loginEmail = '  Hello@Diego.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
//delete spaces in String
// const trimmedEmail = lowerEmail.trim();
const trimmedEmail = loginEmail.toLowerCase().trim();
// console.log(trimmedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

//booleans
const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Airb'));

// console.log('a+very+nice+string'.split('+'));
// console.log('Diego Solano'.split(' '));

const [firstName, lastName] = 'Diego Solano'.split(' ');
// console.log(firstName);
// console.log(['Mr', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (names) {
  const arr = [];
  const name = names.split(' ');
  for (let n of name) {
    // arr.push(n[0].toUpperCase() + n.slice(1));
    arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  // console.log(arr.join(' '));
};

const passengerNames = 'jessica ann smith davis';
capitalizeName(passengerNames);

//Padding
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+')); //+++++++++++Go to gate 23!++++++++++

const maskCreditCard = function (number) {
  const str = String(number);
  //or
  //const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard(23456789987654));
// console.log(maskCreditCard('09876545678764323454'));

//Repeat
const message2 = 'bad weather... All departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };
// planesInLine(5);

//******************************* HRE IS SOME STRING METHOD PRACTICE **************** */
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const arrflights = flights.split('+');
for (const el of arrflights) {
  const arrflightDetails = el
    .replace('_', '')
    // .trim()
    .replaceAll('_', ' ')
    // .replaceAll(';', ' ')
    .split(';');
  const fromSpot = arrflightDetails[1].slice(0, 3).toUpperCase();
  const toSpot = arrflightDetails[2].slice(0, 3).toUpperCase();
  // []
  arrflightDetails[1] = `from ${fromSpot}`;
  arrflightDetails[2] = `to ${toSpot}`;
  arrflightDetails[3] = `(${arrflightDetails[3]})`;
  const flightFixed = arrflightDetails.join(' ');

  if (arrflightDetails[0].includes('Delayed')) {
    console.log(`${'🔴'}${flightFixed.padStart(43)}`);
  } else {
    console.log(`${flightFixed.padStart(43)}`);
  }
  // console.log(arrflightDetails);
  // `flightFixed.padStart(43)`
}
///////////////////////////////////////////////////////////////////////////////////////
/************************************ CHALLENGE ZONE ********************************/
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// ****************************** Coding Challenge #1 ******************************

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// //1
// const [players1, players2] = game.players;
// // console.log(players1, players2);
// //2
// const [gk, ...fieldplayers] = players1;
// // console.log(gk, fieldplayers);
// //3
// const allplayers = [...players1, ...players2];
// // console.log(allplayers);

// //4
// // 'Thiago', 'Coutinho' and 'Perisic'
// const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1final);

// //5
// const { team1, x: draw, team2: team3 } = game.odds;
// console.log(team1, draw, team3);
// // const oddteam1 = game.odds.team1;
// // const oddteam2 = game.odds.team2;
// // const odddraw = game.odds.x;
// // console.log(oddteam1, oddteam2, odddraw);
// //6
// function printGoals(...players) {
//   console.log(`Total goals: ${players.length}`);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// //7
// (game.odds.team1 < game.odds.team2 &&
//   console.log('Team 1 is more likely to win')) ||
//   (game.odds.team1 > game.odds.team2 &&
//     console.log(`team 2 is more likely to win`));

// *************************** Coding Challenge #2 ***************************

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// for (const [index, value] of Object.entries(game.scored)) {
//   console.log(`Goal ${index}: ${value}`);
// }

// //2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const value of odds) {
//   average += value;
//   average /= odds.length;
// }
// console.log(average);

// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// //BONUS
// const scorersPlayers = {};
// for (const index of Object.values(game.scored)) {
//   scorersPlayers[index] ? scorersPlayers[index]++ : (scorersPlayers[index] = 1);
// }
// console.log(scorersPlayers);

//

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2
// gameEvents.delete(64);
// console.log(...gameEvents);

// //3
// let key = 90;

// console.log(
//   `An event happened, on average, every ${key / gameEvents.size} minutes`
// );

// //4
// for (const [value, key] of gameEvents) {
//   if (value < 45) console.log(`[FIRST HALF] ${value}: ${key}`);
//   else console.log(`[SECOND HALF] ${value}: ${key}`);
// }

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #4
/*

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const convertString = function (string) {
//   const [first, second] = string.toLowerCase().trim().split('_');
//   const output = `${first}${second.replace(
//     second[0],
//     second[0].toUpperCase()
//   )}`;
//   return output;
//   // console.log(`${output.padEnd(20)}${'✅'}`);
//   // const str = string.split('_');
//   // str[1] = str[1].replace(str[1][0], str[1][0].toUpperCase());
//   // console.log(str.join('').trim());
// };

// convertString('a_ww');

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   // console.log(rows);
//   for (const [index, string] of rows.entries()) {
//     console.log(`${convertString(string).padEnd(20)}${'✅'.repeat(index + 1)}`);
//   }
// });
