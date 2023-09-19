'use strict';

// Select elements
const btnAgain = document.querySelector('.again');
const boxNumberCorrect = document.querySelector('.number');
const boxInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
const body = document.querySelector('body');

// Set inicial score and highscore
let score = 20;
let highscore = 0;

// Set the function to generate random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber, typeof randomNumber);

btnCheck.addEventListener('click', () => {
  let inputValue = Number(boxInput.value);

  if (!inputValue) {
    message.textContent = 'Please insert a number!';
  } else if (inputValue === randomNumber) {
    message.textContent = 'Correct Number!';
    boxNumberCorrect.textContent = inputValue;
    body.style.backgroundColor = '#60b347';
    boxNumberCorrect.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      labelHighscore.textContent = highscore;
    }
  } else if (inputValue !== randomNumber) {
    if (score > 1) {
      message.textContent =
        inputValue > randomNumber ? 'Too high!' : 'Too low!';
      score--;
      labelScore.textContent = score;
    } else {
      labelScore.textContent = 0;
      message.textContent = 'You lose to the game!';
      body.style.backgroundColor = '#ff6961';
    }
  }
  console.log(score);
});

btnAgain.addEventListener('click', () => {
  body.style.backgroundColor = '#222';
  boxNumberCorrect.style.width = '15rem';
  boxNumberCorrect.textContent = '?';
  message.textContent = 'Start guessing...';
  labelScore.textContent = 20;
  boxInput.value = '';
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber, typeof randomNumber);
});
