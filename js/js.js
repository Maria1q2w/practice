`use strict`;

//let a = 0;

//let arr = document.querySelectorAll("li");
//console.log(arr);
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//while (a < 3) {
//    console.log(a);
//    a++;
//}


//for ( let value of arr) {
//    console.log(value);
//}

//let obj = {
//    name: "John",
//    lastName: "Travolta",
//    age: 30,
//};

//for (let key in arr) {
//    console.log(arr[key]);
//
//}

//let elem = document.querySelector(".header");
//
//let oldData = elem.innerHTML;
//
//elem.innerHTML = `<p>${oldData}</p> <p>Hi</p>`;


//let header = document.querySelector("h1");
//let secondHeader = document.createElement("h2");
//secondHeader.innerHTML = "text2";
//header.insertAdjacentHTML("afterbegin", "<p>Some text</p>");
//console.log(secondHeader);

//let header = document.querySelector("h1");
//let ul = document.querySelector("ul");
//let ulClone = ul.cloneNode(true);
//header.prepend(ulClone);


//let header = document.querySelector("h1");
//header.style.marginBottom = "100px";


//let header = document.querySelector("h1");
//header.classList.add("newClass");

//let header = document.querySelector("h1");
//let styleOfHeader = getComputedStyle(header);
//console.log(parseInt(styleOfHeader.marginBottom));

//let img = document.querySelector("img");
//
//img.src = "https://avatars.mds.yandex.net/i?id=d4dfbbc61eb7fdce2dddd0f18910a2408b36738a-12991402-images-thumbs&n=13";


//const arr = [1, 2, 3, 4, 5, 6];
//console.log(...arr);

//const obj = {
//    fruits: ["apple", "orange", "limon", "watermelon"],
//    drinks: ["juice", "tea", "coctail"],
//}
//
//
//console.log(...obj.drinks);
//console.log(obj.drinks);

//function calc (a, b, c, ...numbers) {
//    let sum = 0;
//    for (let value of numbers) {
//        sum += value;
//    }
//    console.log(a, b);
//    console.log(sum);
//}
//calc (4, 6, 3, 6, 8);


//const hotel = new Map ([
//    ["categories", ["std", "eco", "suit", "lux"]],
//    [true, "Мы открыты"],
//    [false, "Мы закрыты"],
//]);
//console.log(hotel);

//for (let [key, value] of hotel) {
//    console.log(`Ключ: ${key}, значение: ${value}`);
//};


//const obj = {
//    name: "John", 
//    lastName: "Travolta",
//    age: 30,
//};


//конвертация в Map 
//const mapFromObj = new Map(Object.entries(obj));
//console.log(mapFromObj);

//конвертация в Set
//const setFromMap = new Set(hotel);
//console.log(setFromMap);

//конвертация в массив 
//const arrFromMap = Array.from(hotel);
//console.log(arrFromMap);


//конвертация в массив
//const arrFromObj = Object.entries(obj);  
//console.log(arrFromObj);
//конвертация обратно в объукт
//const objFromarr = Object.fromEntries(arrFromObj);
//console.log(objFromarr);

const priceRub = "2906р";
const rubUSD =  priceRub.slice(-1);
const priceUSD = priceRub.slice(0, priceRub.length - 1) / 72 + rubUSD.replace("р", "$");

console.log(priceUSD);

