'use strict';
let highScore = 0;
let score = 20;
let random = Math.floor(Math.random() * 20 + 1);
console.log(random);
const message = document.querySelector('.message');
const dscore = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);

  //when player wins
  if (guess === random) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    message.textContent = 'Correct 😎';
    document.querySelector('.number').textContent = random;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //if the user lost the battle
  } else if (score === 0) {
    message.textContent = '💀 YOU LOST 💀';

    //if no guess input
  } else if (!guess) {
    message.textContent = 'No number 😒';
    score--;
    dscore.textContent = score;

    //if score is too low
  } else {
    message.textContent = (guess > random) ? 'too high ⬆️' : 'too low ⬇️';
    document.querySelector('.guess').value = 0;
    score--;
    dscore.textContent = score;
  }
  // else if (guess > random) {
  //   message.textContent = 'too high ⬆️';
  //   document.querySelector('.guess').value = 0;
  //   score--;
  //   dscore.textContent = score;

  //   // if score is too low
  // } else if (guess < random) {
  //   document.querySelector('.guess').value = 0;
  //   if (score !== 0) {
  //     message.textContent = 'too low ⬇️';
  //     score--;
  //     dscore.textContent = score;
  //   }
  // } console.log(guess);
});

//when the user wanna to replay the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').textContent = score;
  dscore.textContent = 20;
  random = Math.floor(Math.random() * 20 + 1);
  console.log(random);
});
