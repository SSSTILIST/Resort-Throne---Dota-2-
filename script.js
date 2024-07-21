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

let boostPrices = {
    "Price1": 45,
    "Price2": 50,
    "Price3": 50,
    "Price4": 55,
    "Price5": 55,
    "Price6": 1800
};

let priceElements = {
    "Price1": document.getElementById("Price1"),
    "Price2": document.getElementById("Price2"),
    "Price3": document.getElementById("Price3"),
    "Price4": document.getElementById("Price4"),
    "Price5": document.getElementById("Price5"),
    "Price6": document.getElementById("Price6")
};

function updatePrices() {
    let rating = parseInt(playerRatingInputText.value, 10);
    playerRatingNumber.textContent = "+" + playerRatingRange.value;
    
    for (let key in boostPrices) {
        if (boostPrices.hasOwnProperty(key)) {
            priceElements[key].textContent = calculatePrice(rating, playerRatingRange.value) + "₽";
        }
    }
}

function calculatePrice(rating, boostAmount) {
    let pricePer100MMR;
    if (rating <= 500) pricePer100MMR = 100;
    else if (rating <= 1000) pricePer100MMR = 120;
    else if (rating <= 2000) pricePer100MMR = 120;
    else if (rating <= 2500) pricePer100MMR = 120;
    else if (rating <= 3000) pricePer100MMR = 160;
    else if (rating <= 3500) pricePer100MMR = 200;
    else if (rating <= 4000) pricePer100MMR = 230;
    else if (rating <= 4500) pricePer100MMR = 270;
    else if (rating <= 5000) pricePer100MMR = 300;
    else if (rating <= 5500) pricePer100MMR = 350;
    else if (rating <= 6000) pricePer100MMR = 470;
    else if (rating <= 6500) pricePer100MMR = 670;
    else if (rating <= 7000) pricePer100MMR = 870;
    else if (rating <= 7500) pricePer100MMR = 1100;
    else if (rating <= 8000) pricePer100MMR = 1400;
    
    return pricePer100MMR * (boostAmount / 100);
}

playerRatingRange.oninput = updatePrices;
playerRatingInputText.oninput = updatePrices;

window.onload = function() {
    updatePrices();
};
