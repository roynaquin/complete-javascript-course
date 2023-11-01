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
*/

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
