'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive a car 🚗.`);

//Functions
// Simple Function with no invoking
function logger() {
  console.log('My name is Roy');
}

logger();
logger();
logger();

// Calling / Running / Invoking function
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);



// Arrow Functions
// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
//Arrow Function (For 1 parameter)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Arrow Function (For More than 1 step)
const yearsUntilReturement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilReturement(1991, 'Jonas'));
console.log(yearsUntilReturement(1980, 'Bob'));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilReturement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has alreadyretired.`);
    return -1;
  }
};

console.log(yearsUntilReturement(1991, 'Jonas'));
console.log(yearsUntilReturement(1950, 'Mike'));

// Arrow Function (For More than 1 step)
const yearsUntilReturement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilReturement(1991, 'Jonas'));
console.log(yearsUntilReturement(1980, 'Bob'));


//Challenge #5
//Declare calcAverage Function
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(3, 4, 5));

//Assign calcAverage scores
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

//Declare checkwinner Function
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
  } else {
    console.log(`Noone wins.`);
  }
};

//Call Check Winner Function
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


// Introduction to Arrays
// example calling multiple variables...
const friend1 = 'Michael';
const friend2 = 'Stephen';
const friend3 = 'Peter';

//Array structure
//Literal Syntax
const friends = ['Michael', 'Stephen', 'Peter'];
console.log(friends);
console.log(friends[1]);

//New Syntax
const years = new Array(1991, 1984, 2020);
console.log(years);
console.log(years[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Basic Array Operations
const friends = ['Michael', 'Stephen', 'Peter'];
// Add Elements
const newLength = friends.push('Jay'); // .push adds element to the end
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Remove last
const popped = friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

//Check position of element
console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

//Check to see if a a value is there true of false
console.log(friends.includes('Stephen'));
console.log(friends.includes('Bob'));

//Conditional
if (friends.includes('Stephen')) {
  console.log('You have a friend called Peter.');
}

//Challenge 2
// 1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// 2. And now let's use arrays! So, create an array called bills containing the test data below.

// 3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// 4. BONUS: Create an array totals containing the total values, so the bill + tip.

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //Ternery operator
};

console.log(calcTip);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

const totalSum = [
  `Thank you for your order. Your bill was ${bills[0]} the total tip was ${tips[0]} and the total was ${totals[0]}. Please come back soon.`,
  `Thank you for your order. Your bill was ${bills[1]} the total tip was ${tips[1]} and the total was ${totals[1]}. Please come back soon.`,
  `Thank you for your order. Your bill was ${bills[2]} the total tip was ${tips[2]} and the total was ${totals[2]}. Please come back soon.`,
];

console.log(totalSum[1]);
// Objects. Order matters (structured)
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Stephen'],
];

// Object literal syntax. Order does not matter (unstructured)
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Stephen'],
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

// console.log(jonas.'last' + nameKey)
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Stephen'],
  hasDriversLicense: true,

  //  calcAge: function (birthYear) {
  //    return 2037 - birthYear;
  //  },
  //};

  //"This" Keyword concept Don't Repeat Yourself "DRY"
  // calcAge: function () {
  // return 2037 - this.birthYear;

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);

//console.log(jonas['calcAge']()); // This points to Jonas

// Chalenge
//"Jonas is a 46-year old teacher, and he has a drivers license"

console.log(jonas.getSummary());
