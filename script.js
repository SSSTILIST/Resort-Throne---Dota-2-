// QRcode
let QRcodePhoto = document.getElementById("QRcodePhoto");
let authorLink = document.getElementById("authorLink");

function pay() {
    QRcodePhoto.style.display = "flex";
    QRcodePhoto.style.animation = "showUp 0.2s forwards";

    authorLink.style.display = "flex";
    authorLink.style.animation = "showUp 0.2s forwards";
}

document.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() !== "button" && event.target.tagName.toLowerCase() !== "img") {
        QRcodePhoto.style.animation = "showUpNo 0.2s forwards";
        authorLink.style.animation = "showUpNo 0.2s forwards";
    }
});

// PlayerRatings
let playerRatingRange = document.getElementById("playerRatingRange");
let playerRatingNumber = document.getElementById("playerRatingNumber");

let playerRatingInputText = document.getElementById("playerRatingInputText");
let startRatingInputText = document.getElementById("startRatingInputText");

let boostPrice = document.getElementById("Price1");
let boostPrice2 = document.getElementById("Price2");
let boostPrice3 = document.getElementById("Price3");
let boostPrice4 = document.getElementById("Price4");
let boostPrice5 = document.getElementById("Price5");
let boostPrice6 = document.getElementById("Price6");

playerRatingNumber.textContent = "+" + playerRatingRange.value;

function updatePrices() {
    playerRatingNumber.textContent = "+" + this.value;
    calculatePrice();
}

playerRatingRange.oninput = updatePrices;
playerRatingInputText.oninput = function() {
    if (this.value >= 0 && this.value <= 8000) {
        controll();
    }
};

startRatingInputText.oninput = function() {
    if (this.value >= 0 && this.value <= 8000) {
        controll();
    }
};

let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let options5 = document.getElementById("options5");
let options6 = document.getElementById("options6");

function controll() {
    // Ensure the player rating input is within bounds
    let rating = Math.min(Math.max(parseInt(playerRatingInputText.value, 10), 0), 8000);
    let startRating = Math.min(Math.max(parseInt(startRatingInputText.value, 10), 0), 8000);

    playerRatingRange.max = 8000 - rating;

    let optionsPlus = 1;
    if (options1.checked) optionsPlus += 0.3;
    if (options2.checked) optionsPlus += 0.05;
    if (options3.checked) optionsPlus += 0.1;
    if (options4.checked) optionsPlus += 0.1;
    if (options5.checked) optionsPlus += 0.2;
    if (options6.checked) optionsPlus += 0.5;

    calculatePrice();
}

function calculatePrice() {
    let rating = parseInt(playerRatingInputText.value, 10);
    let startRating = parseInt(startRatingInputText.value, 10);
    let boostRange = parseInt(playerRatingRange.value, 10);

    let totalRating = rating + boostRange - startRating;
    let price = 0;

    if (totalRating <= 500) {
        price = 100;
    } else if (totalRating <= 1000) {
        price = 120;
    } else if (totalRating <= 2000) {
        price = 120;
    } else if (totalRating <= 2500) {
        price = 120;
    } else if (totalRating <= 3000) {
        price = 160;
    } else if (totalRating <= 3500) {
        price = 200;
    } else if (totalRating <= 4000) {
        price = 230;
    } else if (totalRating <= 4500) {
        price = 270;
    } else if (totalRating <= 5000) {
        price = 300;
    } else if (totalRating <= 5500) {
        price = 350;
    } else if (totalRating <= 6000) {
        price = 470;
    } else if (totalRating <= 6500) {
        price = 670;
    } else if (totalRating <= 7000) {
        price = 870;
    } else

function controll() {
    // Ваша функция контроллера
}

function pay() {
    // Ваша функция оплаты
}
