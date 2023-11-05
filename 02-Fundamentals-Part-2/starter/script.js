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

*/

/* Challenge #3
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

//Define Mark Object
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  // Calculate BMI Function for Mark
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

//Define John Object
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  // Calculate BMI Function for John
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

//Call the functions
mark.calcBMI(); // Call Function!!
john.calcBMI(); // Call Function!!

//Log the calculations
console.log(mark.bmi);
console.log(john.bmi);

//Output Strings
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
}


//Iteration the For Loop
//console.log('Lifting weights repition 1 🏋️');

// for loop keeps running while condition is TRUE.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repition ${rep} 🏋️`);
}


//Looping Arrays, Braking and Continuing
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Stephen'],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from Jonas
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  //types[i] = typeof jonasArray[i];

  // Filling types array using push method
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--OnlyStrings--');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--Break With Number--');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

// Looping Arrays Backwards
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Stephen'],
  true,
];

// Last lecture started with 0, 1...,4
// Now we go from 4, 3,...0

// for (let i = jonas.length - 1; i >= 0, i--; ) {
//   console.log(i, jonas[i]);
// }
// start of exercises 1-3
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`🛎 Starting Exercise ${exercise} 🛎 `);
//   // lifting weight repititions 1-5
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repitition ${rep} 🏋️`);
//   }
// }

//While Loop
//Use while loop when you don't know how many iterations are needed.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repitition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end..`);
// }

//Challenge #4
// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //Ternery operator
// };

// console.log(calcTip);

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// const totalSum = [
//   `Thank you for your order. Your bill was ${bills[0]} the total tip was ${tips[0]} and the total was ${totals[0]}. Please come back soon.`,
//   `Thank you for your order. Your bill was ${bills[1]} the total tip was ${tips[1]} and the total was ${totals[1]}. Please come back soon.`,
//   `Thank you for your order. Your bill was ${bills[2]} the total tip was ${tips[2]} and the total was ${totals[2]}. Please come back soon.`,
// ];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length, i++; ) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
