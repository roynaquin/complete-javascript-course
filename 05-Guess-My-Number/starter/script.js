'use strict';
//Selecting an element
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '😎 Correct Number!';
console.log(
  (document.querySelector('.message').textContent = '😎 Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 12;
document.querySelector('.number').textContent = '❓';

*/

//Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no number entered
  if (!guess) {
    displayMessage('No number ⛔️');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('😎 Correct Number️');
    document.querySelector('.number').textContent = secretNumber;

    //Change the style using CSS.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30REM';

    //Set HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is not secretNumber
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '🥵 Too High️' : '🥶 too low️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You Lost The Game!');
      displayScore(0);
    }
    /*} else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🥵 Too High️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🥶 too low️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost The Game!';
    }
  }*/
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset score and secret number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Change content
  displayMessage('Start guessing');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';

  //Style CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15REM';
});

/* Implement a game rest functionality, so that the player can make a new game. Here is how:

1. Select the lement with 'again' class and attach a click event handler. 

2. In the handler function restore initial values of the score and number variables. 

3. Restore the initial conditions of the message, number, score and guess input field. 

4. Restore the original background color (#222) and number width (15rem). */
