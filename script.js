"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//refactor the code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(".message").textContent = "🙁 No Number!";
    displayMessage("🙁 No Number!");
    //score--;
    //  document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🥳 Yeah Correct Number!";
    displayMessage("🥳 Yeah Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is wrong using DRY Principle
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //guess > secretNumber ? "Too High!" : "Too Low!";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost!";
      displayMessage("You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //makes the code long
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
//restore the changes to play the game again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
