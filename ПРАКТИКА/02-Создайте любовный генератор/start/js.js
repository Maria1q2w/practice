const firstName = prompt("напишите первое имя");
const secondName = prompt("напишите второе имя");

const randomNumber = (Math.floor(Math.random() * 100));

if (randomNumber < 33 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вам нужно поискать человека с другим именем`);
} else if (randomNumber >= 33 && randomNumber < 66 && firstName != null && secondName != null && firstName != "" && secondName != ""){
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}  совместимость хорошая, но может быть и лучше`);
} else if (randomNumber >= 66 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}   Вы идеально подходите друг к другу`);
} else {
    alert("Ooopsss... Какое-то страшное число полуяилось. Попробуйте еще раз.");
}


const age = 22;

age >= 18 ? console.log("Мне есть 18 и я могу пить винишко") : console.log("Я еще слишком маленький. Пью сок");


const drink = age >= 18 ? "wine" : "juice";

console.log(drink);

console.log(`Я люблю пить ${age >= 18 ? "wine" : "juice"}`);
