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

function newPrice() {
    let playerRating = parseInt(playerRatingInputText.value);
    let mmrGain = parseInt(playerRatingRange.value);
    let basePrice = 0;

    if (playerRating >= 0 && playerRating < 500) {
        basePrice = 100;
    } else if (playerRating >= 500 && playerRating < 1000) {
        basePrice = 120;
    } else if (playerRating >= 1000 && playerRating < 1500) {
        basePrice = 120;
    } else if (playerRating >= 1500 && playerRating < 2000) {
        basePrice = 120;
    } else if (playerRating >= 2000 && playerRating < 2500) {
        basePrice = 120;
    } else if (playerRating >= 2500 && playerRating < 3000) {
        basePrice = 160;
    } else if (playerRating >= 3000 && playerRating < 3500) {
        basePrice = 200;
    } else if (playerRating >= 3500 && playerRating < 4000) {
        basePrice = 230;
    } else if (playerRating >= 4000 && playerRating < 4500) {
        basePrice = 270;
    } else if (playerRating >= 4500 && playerRating < 5000) {
        basePrice = 300;
    } else if (playerRating >= 5000 && playerRating < 5500) {
        basePrice = 350;
    } else if (playerRating >= 5500 && playerRating < 6000) {
        basePrice = 470;
    } else if (playerRating >= 6000 && playerRating < 6500) {
        basePrice = 670;
    } else if (playerRating >= 6500 && playerRating < 7000) {
        basePrice = 870;
    } else if (playerRating >= 7000 && playerRating < 7500) {
        basePrice = 1100;
    } else if (playerRating >= 7500 && playerRating < 8000) {
        basePrice = 1400;
    }

    let totalPrice = (basePrice / 100) * mmrGain * optionsPlus;

    boostPrice.textContent = totalPrice.toFixed(0) + "₽";
}

window.onload = function() {
    newPrice();
};
