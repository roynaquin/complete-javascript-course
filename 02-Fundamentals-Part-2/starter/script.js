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

*/

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
