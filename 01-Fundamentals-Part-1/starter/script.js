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
*/
