/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is Fun!');
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

let firstName = 'Roy';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name onventions
let jonas_matilda = 'JM';
let name = "jonas";

let person = 'Jonas';
let PI = 3.1415; //JS recognizs this. 

//Make Variables descriptive so they are understood
let myFirstJob = 'teacher';
let mySecondJob = 'programmer';
console.log('I started out as a ' + myFirstJob + ' before I became a ' + mySecondJob + '.');

// Dynamic Typing Examples
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// Video 12: let const and var
//reassigning or mutating a variable
let age = 30;
age = 31;

// const creates an immutable variable. By default use const
const birthYear = 1991;

//var is the old way of writinng ESC.
var job = "progrrammer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


//Video 13: Operators
//Mathematic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x + 4 = 100
x /= 4; // x = x / 4 = 25
x++; // x = x + 1 = 26
x--; // x = x - 1 = 25
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//Strings & Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2023;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
console.log(jonas);

//temperate literal string uses `` to avoid concantenate which is easier and allows you to wrie multi line strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

//Decisions
//Program that checks if someone can take license exame
const age = 17;
const isOldEnough = age >= 18;
// If Else Control Structure
if (isOldEnough) {
  console.log("Sarah can start driving license 😎.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah isn't old enough. She should try again in ${yearsLeft} year(s).`
  );
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Challenge #2 Code
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigher = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
const johnHigher = `John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`;

if (BMIMark > BMIJohn) {
  console.log (markHigher);
} else {
  console.log (johnHigher);
}


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


//Truthy and Falsy Values
// 5  Falsey Values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// Example of 0 Falsy value
const money = 0;
if (money) {
  console.log("Don't Spend it all ;");
} else {
  console.log('You should get a job!');
}

// Example of undefined Falsy Value
let height;
if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

//Equality Operators
const age = '18';
// Forces exact (always use to avoid bugs)
if (age === 18) console.log('You just became an adult! (strict)');
// Allows for strings also.
if (age == 18) console.log('You just became an adult! (loose');

const favorite = Number(prompt("What's your favorie number?"));
console.log(favorite);
console.log(typeof favorite);

// Else if examples of strict numbers
if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number!');
} else if (favorite === 9) {
  console.log('9 is also a cool number!');
} else {
  console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');


//Boolean Logic
// and, or and not operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || Vision); // OR
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;
//if (shouldDrive) {
//  console.log('Sarah is able to drive.');
//} else {
//console.log('Someone else should drive.');
//}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive.');
} else {
  console.log('Someone else should drive.');
}


//Coding challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the tropy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy');
}
*/
//The Switch Statement
/*const day = 'friday';

 switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // needed to stop the cycle
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend.');
    break;
  default:
    console.log('Not a valid day!');
}

//Switch Example using else if 
const day = 'friday';
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}


//Statements are like full sentences & Expressions produce values
if (23 > 10) {
  //expression
  const str = '23 is bigger'; //statement
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}.`);


//Conditional Operators
const age = 23;
age >= 18
  ? console.log('i like to drink wine.')
  : console.log('I like to drink water');

//Ternary Operator Example
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink); // Much easier to write than if / else

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${drink}.`);

//Challenge 4
const bill = 10;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
*/
// Javascript Releases ES5, ES6+ and ESNext
