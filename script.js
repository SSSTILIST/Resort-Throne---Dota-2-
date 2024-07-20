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

let boostPrice = document.getElementById("Price1");
let boostPrice2 = document.getElementById("Price2");
let boostPrice3 = document.getElementById("Price3");
let boostPrice4 = document.getElementById("Price4");
let boostPrice5 = document.getElementById("Price5");
let boostPrice6 = document.getElementById("Price6");

playerRatingNumber.textContent = "+" + playerRatingRange.value;

boostPrice.textContent = boostPrice.textContent + "₽";
boostPrice2.textContent = boostPrice2.textContent + "₽";
boostPrice3.textContent = boostPrice3.textContent + "₽";
boostPrice4.textContent = boostPrice4.textContent + "₽";
boostPrice5.textContent = boostPrice5.textContent + "₽";
boostPrice6.textContent = boostPrice6.textContent + "₽";

let newBoostPrice = parseFloat(boostPrice.textContent);
let newBoostPrice2 = parseFloat(boostPrice2.textContent);
let newBoostPrice3 = parseFloat(boostPrice3.textContent);
let newBoostPrice4 = parseFloat(boostPrice4.textContent);
let newBoostPrice5 = parseFloat(boostPrice5.textContent);
let newBoostPrice6 = parseFloat(boostPrice6.textContent);

playerRatingRange.oninput = updatePrices;
function updatePrices() {
    playerRatingNumber.textContent = "+" + this.value;
    newPrice();
};

let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let options5 = document.getElementById("options5");
let options6 = document.getElementById("options6");

let maxValueOfplayerRatingInputText = 0;

let optionsPlus = 1;

function controll() {
    maxValueOfplayerRatingInputText = 8000 - playerRatingInputText.value;
    playerRatingRange.max = maxValueOfplayerRatingInputText;

    optionsPlus = 1;
    if (options1.checked == true) {
        optionsPlus = optionsPlus + 0.3;
    }
    if (options2.checked == true) {
        optionsPlus = optionsPlus + 0.05;
    }
    if (options3.checked == true) {
        optionsPlus = optionsPlus + 0.1;
    }
    if (options4.checked == true) {
        optionsPlus = optionsPlus + 0.1;
    }
    if (options5.checked == true) {
        optionsPlus = optionsPlus + 0.2;
    }
    if (options6.checked == true) {
        optionsPlus = optionsPlus + 0.5;
    }
    console.log(optionsPlus);
    if (playerRatingInputText.value >= 0 && playerRatingInputText.value <= 8000) {
        newPrice();
    }
}

function getPricePer100MMR(mmr) {
    if (mmr <= 2000) {
        return 100;
    } else if (mmr <= 3000) {
        return 120;
    } else if (mmr <= 4000) {
        return 200;
    } else if (mmr <= 5000) {
        return 280;
    } else if (mmr <= 6000) {
        return 670;
    } else {
        return 0; // Замените на соответствующую цену для диапазонов выше 6000
    }
}

function newPrice() {
    let startMMR = parseInt(playerRatingInputText.value);
    let endMMR = startMMR + parseInt(playerRatingRange.value);
    let pricePer100MMR = getPricePer100MMR(startMMR);
    let totalPrice = ((endMMR - startMMR) / 100) * pricePer100MMR * optionsPlus;

    boostPrice.textContent = totalPrice.toFixed(0) + "₽";
    boostPrice2.textContent = (totalPrice + 50).toFixed(0) + "₽";
    boostPrice3.textContent = (totalPrice + 50).toFixed(0) + "₽";
    boostPrice4.textContent = (totalPrice + 55).toFixed(0) + "₽";
    boostPrice5.textContent = (totalPrice + 55).toFixed(0) + "₽";
    boostPrice6.textContent = (totalPrice + 1800).toFixed(0) + "₽";
}

window.onload = function() {
    newPrice();
};
