let price = document.getElementById("price");
let priceValue = +price.textContent;
const burgers = document.getElementById("burgers");
const meatPrice = 2;
const lettuces = document.getElementById("lettuces");
const lettucePrice = 1;
const tomatos = document.getElementById("tomatos");
const tomatoPrice = 1.5;
const vegetarians = document.getElementById("vegetarians");
const vegetarianPrice = 2.5;

function addBurger() {
    let burgerImg = document.createElement("img");
    burgerImg.src = "./image/meat.png";
    burgerImg.alt = "meat";
    burgers.appendChild(burgerImg);
    priceValue += meatPrice;
    price.innerHTML = priceValue;
}

function removeBurger() {
    if (burgers.lastChild && priceValue > 5) {
        burgers.removeChild(burgers.lastChild);
        priceValue -= meatPrice;
        price.innerHTML = priceValue;
    }
}

function addLettuce() {
    let lettuceImg = document.createElement("img");
    lettuceImg.src = "./image/lettuce.png";
    lettuceImg.alt = "lettuce";
    lettuces.appendChild(lettuceImg);
    priceValue += lettucePrice;
    price.innerHTML = priceValue;
}

function removeLettuce() {
    if (lettuces.lastChild && priceValue > 5) {
        lettuces.removeChild(lettuces.lastChild);
        priceValue -= lettucePrice;
        price.innerHTML = priceValue;
    }
}

function addTomato() {
    let tomatoImg = document.createElement("img");
    tomatoImg.src = "./image/tomato.png";
    tomatoImg.alt = "tomato";
    tomatos.appendChild(tomatoImg);
    priceValue += tomatoPrice;
    price.innerHTML = priceValue;
}

function removeTomato() {
    if (tomatos.lastChild && priceValue > 5) {
        tomatos.removeChild(tomatos.lastChild);
        priceValue -= tomatoPrice;
        price.innerHTML = priceValue;
    }
}


function addVegetarian() {
    let vegetarianImg = document.createElement("img");
    vegetarianImg.src = "./image/vegetarian.png";
    vegetarianImg.alt = "vegetarian";
    vegetarians.appendChild(vegetarianImg);
    priceValue += vegetarianPrice;
    price.innerHTML = priceValue;
}

function removeVegetarian() {
    if (vegetarians.lastChild && priceValue > 5) {
        vegetarians.removeChild(vegetarians.lastChild);
        priceValue -= vegetarianPrice;
        price.innerHTML = priceValue;
    }
}