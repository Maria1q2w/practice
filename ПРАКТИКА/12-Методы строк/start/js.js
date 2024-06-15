"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/


document.querySelector(".btn").addEventListener("click", function () {
    const strings = document.querySelector(".text").value;
    console.log(strings);
    const stringsNew = strings.split("\n");
    console.log(stringsNew);
    let newUpperWords = [];
    for (let i = 0; i < stringsNew.length; i++) {
        const word = stringsNew[i].trim().split("_");
        word[1] = word[1][0].toUpperCase() + word[1].slice(1);
        const strFromArray = word.join("");
        newUpperWords.push(strFromArray);
    }
    console.log(newUpperWords);
    const newUpperWordsString = newUpperWords.join("\n");
    document.querySelector(".output").innerText = newUpperWordsString;
});



