'use strict';
//Selecting an element
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '😎 Correct Number!';
console.log(
  (document.querySelector('.message').textContent = '😎 Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 12;
document.querySelector('.number').textContent = '❓';
