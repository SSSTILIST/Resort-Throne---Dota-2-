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

playerRatingRange.oninput = updatePrices;

function updatePrices() {
    playerRatingNumber.textContent = "+" + this.value;
    newPrice();
}

function getPriceForRating(rating) {
    if (rating <= 2000) return 100;
    if (rating <= 3000) return 120;
    if (rating <= 4000) return 200;
    if (rating <= 5000) return 280;
    if (rating <= 6000) return 670;
    return 0; // Можно указать цену по умолчанию, если рейтинг превышает 6000
}

function newPrice() {
    let rating = parseInt(playerRatingInputText.value) || 0;
    let range = parseInt(playerRatingRange.value) || 0;
    
    // Общая цена за 100 ммр в зависимости от рей
