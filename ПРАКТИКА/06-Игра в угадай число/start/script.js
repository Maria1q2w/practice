"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/




let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secret', secretNumber)

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number (document.querySelector(".guess").value);
    const scoreEl = document.querySelector(".score");
    console.log('guess', guess);

    if (!guess) {
        displayMessage ("Вы не ввели число!");
    } else if (guess === secretNumber) {
        displayMessage ("Вы победили!");
        document.querySelector("body").style.background = "green";
        document.querySelector(".number").textContent = guess;
        document.querySelector(".check").style.display = "none";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else {
        score = score - 1;
        if (score > 0) {

            if (guess > secretNumber)  {
                displayMessage ("Слишком много");
            } else {
                displayMessage ("Слишком мало");
            }
        } else {
            displayMessage ("Вы проиграли!(");
            document.querySelector(".check").style.display = "none";
        }

        scoreEl.textContent = score;
    }

});

document.querySelector(".again").addEventListener("click",() => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('secret', secretNumber);
    displayMessage("Начните угадывать!");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.background = `
    radial-gradient(
        circle,
        rgba(35, 34, 41, 1) 51%,
        rgba(56, 59, 60, 1) 100%
    )`;
    document.querySelector(".check").style.display = "block";
});


