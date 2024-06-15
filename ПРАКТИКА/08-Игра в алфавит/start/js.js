"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/


const boxesBox = document.querySelectorAll (".boxes__box");
const audioWin = new Audio ("audio/huge-win.wav");
const audioClick = new Audio ("audio/Mountain Audio - Menu Click.mp3");
let newLetters;

//const boxA = document.querySelector (".box_a");
//const boxB = document.querySelector (".box_b");
//const boxC = document.querySelector (".box_c");
//const boxD = document.querySelector (".box_d");
//const boxE = document.querySelector (".box_e");
//const boxF = document.querySelector (".box_f");


//for (let value of boxesBox) {
//    value.addEventListener("click", () => {
//        audioClick.play();
//    });//
//}

for (let i = 0; i < boxesBox.length; i++) {
    boxesBox[i].addEventListener("click", () => {
        if (boxesBox[i].previousElementSibling != null) {
            boxesBox[i].previousElementSibling.before(boxesBox[i]);
            audioClick.play();
            newLetters = document.querySelectorAll(".boxes__box");
            console.log(newLetters);
        } else if (boxesBox[i].nextElementSibling != null) {
            boxesBox[i].nextElementSibling.after(boxesBox[i]);
            audioClick.play();
            newLetters = document.querySelectorAll(".boxes__box");
            console.log(newLetters);
        }
        if (
            newLetters[0].classList.contains("box_a") && 
            newLetters[1].classList.contains("box_b") && 
            newLetters[2].classList.contains("box_c") && 
            newLetters[3].classList.contains("box_d") && 
            newLetters[4].classList.contains("box_e") && 
            newLetters[5].classList.contains("box_f") 
        ) {
            audioWin.play();
        }

    });
}

//boxA.addEventListener("click", () => {
//    if (boxA.previousElementSibling != null) {
//        boxA.previousElementSibling.before(boxA);
//    } else if (boxA.nextElementSibling != null) {
//        boxA.nextElementSibling.after(boxA);
//    }
//});
//
//boxB.addEventListener("click", () => {
//    boxB.previousElementSibling.before(boxB);
//})
//
//boxC.addEventListener("click", () => {
//    boxC.previousElementSibling.before(boxC);
//})
//
//boxD.addEventListener("click", () => {
//    boxD.previousElementSibling.before(boxD);
//})
//
//boxE.addEventListener("click", () => {
//    boxE.previousElementSibling.before(boxE);
//})
//
//boxF.addEventListener("click", () => {
//    boxF.previousElementSibling.before(boxF);
//})
