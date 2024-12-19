const locationPrices = {
    telephely: { true: 0, false: 0 },
    város: { true: 100, false: 50 },
    vidék: { true: 150, false: 100 },
    "roxwood county": { true: 200, false: 150 },
};

const categoryPricesBright = {
    "munkajármű": [20, 30, 35],
    "alsó": [40, 55, 70],
    "közép": [90, 120, 150],
    "felső": [135, 180, 210],
    "luxus/prémium": [210, 280, 315],
    "super classic": [65, 90, 100],
};

const categoryPricesKovaac = {
    "munkajármű": [20, 30, 35],
    "alsó": [20, 45, 70],
    "közép": [50, 100, 150],
    "felső": [100, 150, 200],
    "luxus/prémium": [210, 280, 315],
    "super classic": [65, 90, 100],
};

const totaledInput = document.getElementById("totaled");
const locationInput = document.getElementById("location");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const percentageInput = document.getElementById("percentage");
const resultDisplay = document.getElementById("result");

function calculatePrice() {
    const isTotaled = totaledInput.checked;
    const location = locationInput.value;
    const type = typeInput.value;
    const category = categoryInput.value;
    const percentage = parseInt(percentageInput.value, 10);

    if (percentage < 0 || percentage > 100) {
        resultDisplay.textContent = "Hibás százalék (0-100 között)!";
        return;
    }

    const categoryPrices = type === "bright" ? categoryPricesBright : categoryPricesKovaac;

    if (!locationPrices[location] || !categoryPrices[category]) {
        resultDisplay.textContent = "Hibás adat!";
        return;
    }

    const percentageIndex = percentage >= 60 ? 0 : percentage >= 30 ? 1 : 2;
    const locationPrice = locationPrices[location][isTotaled];
    const categoryPrice = categoryPrices[category][percentageIndex];
    const totalPrice = locationPrice + categoryPrice;

    resultDisplay.textContent = `Végső ár: $${totalPrice}`;
}

document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("input", calculatePrice);
});

calculatePrice();
