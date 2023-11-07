// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Problem:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures1 = [4, -1, 5, 2, 9, 'error', -1, 145, 123];

// 1) understand the problem
// - What is temperature amplitude? Answer: Difference between highest and lowest temp.
// - How to compute max and min temperatres?
// - What's a sensor error? And what to do?

// 2)  break it up into sub-problems
// - How to ignore sensor errors
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

// const amplitudeCombined = calcTempAmplitude(temperatures.concat(temperatures1));

// console.log(amplitudeCombined);

// max = 2
// max = 7
// max = 7

// Problem 2:
// Function should now receive 2 arrays of temperatures.
// Understand the problem
// - With 2 arrays, should we implement functionality twice? No, just merge two arrays.

// How to merge 2 arrays.

// const meaureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// A) Identify: wrong answer
// B) Find: measurement.value is a string.
// C) Fix: change measurement.value to a number.

// console.log(meaureKelvin());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 

Example [17, 21, 23] will print "..17C in 1 days. .. 12c in 2 days .. 23C in 3 days.."

Create a functin 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. 

Use the problem-solving framework: Understand the problem and break it into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


1) understand the problem
- array transformed to string seperated by ...
- What is the x days? Current index + 1
- 

2)  break it up into sub-problems
- transform array into a string
- each element will be transformed into string with C
- String needs to contain day (index + 1)
- Add ... between elements and start and end of string

*/

// Challenge #1: Log String to Console
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecast(data2);
