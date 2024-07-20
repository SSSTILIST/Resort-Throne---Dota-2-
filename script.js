//QRcode
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


//PlayerRatings
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Услуги по бусту MMR</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .services {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .service {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
        }

        .price {
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="services">
        <div class="service">
            <h2>Буст до 2000 MMR</h2>
            <p class="price" id="boostPrice">0₽</p>
        </div>
        <div class="service">
            <h2>Буст до 3000 MMR</h2>
            <p class="price" id="boostPrice2">0₽</p>
        </div>
        <!-- Другие услуги -->
        <div class="service">
            <h2>Буст до 4000 MMR</h2>
            <p class="price" id="boostPrice3">0₽</p>
        </div>
        <div class="service">
            <h2>Буст до 5000 MMR</h2>
            <p class="price" id="boostPrice4">0₽</p>
        </div>
        <div class="service">
            <h2>Буст до 6000 MMR</h2>
            <p class="price" id="boostPrice5">0₽</p>
        </div>
        <div class="service">
            <h2>Буст до 7000 MMR</h2>
            <p class="price" id="boostPrice6">0₽</p>
        </div>
    </div>

    <script>
        function calculatePrice(baseValue, multiplier, optionsPlus, additionalCost) {
            return (((baseValue * 1.1) + (multiplier) + 1) * optionsPlus) + additionalCost;
        }

        function newPrice() {
            let baseValue = parseFloat(playerRatingInputText.value);
            let rangeValue = parseFloat(playerRatingRange.value);
            let optionsPlus = parseFloat(document.querySelector("#optionsPlus").value); // Предполагается, что есть элемент с id "optionsPlus"

            let prices = [
                { multiplier: rangeValue * 3, additionalCost: 45, elementId: 'boostPrice' },
                { multiplier: rangeValue * 3.1, additionalCost: 50, elementId: 'boostPrice2' },
                { multiplier: rangeValue * 3.1, additionalCost: 50, elementId: 'boostPrice3' },
                { multiplier: rangeValue * 3.2, additionalCost: 55, elementId: 'boostPrice4' },
                { multiplier: rangeValue * 3.2, additionalCost: 55, elementId: 'boostPrice5' },
                { multiplier: rangeValue * 3.5, additionalCost: 1800, elementId: 'boostPrice6' }
            ];

            prices.forEach(price => {
                let newBoostValue = calculatePrice(baseValue, price.multiplier, optionsPlus, price.additionalCost);
                document.getElementById(price.elementId).textContent = newBoostValue.toFixed(0) + "₽";
            });
        }

        window.onload = function() {
            newPrice();
        };
    </script>
</body>
</html>
