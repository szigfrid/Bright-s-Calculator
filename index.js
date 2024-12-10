const locationPrices = {
    "telephely": { true: 0, false: 0 },
    "város": { true: 100, false: 50 },
    "vidék": { true: 150, false: 100 },
    "roxwood county": { true: 200, false: 150 },
};

const categoryPrices = {
    "munkajármű": [25, 37, 50],
    "alsó": [50, 75, 100],
    "közép": [100, 150, 200],
    "felső": [150, 225, 300],
    "luxus/prémium": [225, 340, 450],
    "super classic": [75, 115, 150],
};

function calculatePrice() {
    const isTotaled = document.getElementById("totaledCheckbox").checked;
    const location = document.getElementById("locationSelect").value;
    const category = document.getElementById("categorySelect").value;
    const percentageInput = document.getElementById("percentageInput").value;

    const percentage = parseInt(percentageInput);
    const resultText = document.getElementById("resultText");

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        resultText.textContent = "Hibás százalék! (0-100 között)";
        return;
    }

    const percentageIndex = percentage >= 60 ? 0 : percentage >= 30 ? 1 : 2;

    if (!(location in locationPrices) || !(category in categoryPrices)) {
        resultText.textContent = "Hibás adat!";
        return;
    }

    const locationPrice = locationPrices[location][isTotaled];
    const categoryPrice = categoryPrices[category][percentageIndex];
    const totalPrice = locationPrice + categoryPrice;

    resultText.textContent = `Végső ár: $${totalPrice}`;
}

// Valós idejű frissítés
document.getElementById("totaledCheckbox").addEventListener("change", calculatePrice);
document.getElementById("locationSelect").addEventListener("change", calculatePrice);
document.getElementById("categorySelect").addEventListener("change", calculatePrice);
document.getElementById("percentageInput").addEventListener("input", calculatePrice);
