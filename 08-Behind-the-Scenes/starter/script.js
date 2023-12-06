'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //add(2, 3);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Hoisting w Variables
//console.log(me);
//console.log(teacher);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = '1991';

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

//Functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example of Hoisting
console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted!');
}

var x = 10;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

// Regular function with no object owner is undefined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// Arrow function doesn't get this keyword so uses lexical this keyword of parent scope which is window in the global scope
const calcArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcArrow(1991);

// Method points this keyword to the object that's calling method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// Method borrowing allows Matilda to use the this keyword to calculate age.
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// Method borrowing into a regular function without any object attachment makes the this keyword undefined because it is a regular function call.
const f = jonas.calcAge;
console.log(f);
f();

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // Solution 2
    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => a + b;


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/
//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage', jessica);
console.log(`After Marriage`, marriedJessica);

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
