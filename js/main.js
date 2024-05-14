// Elementi della pagina
const kmField = document.getElementById('userkm');
const ageField = document.getElementById('userage');
const form = document.getElementById('form');
const resetButton = document.getElementById('reset-button');
const resultElement = document.getElementById('finalprice');

// valori di partenza
const pricePerKm = 0.21;

// va applicato uno sconto del 20% per i minorenni if age < 18
// va applicato uno sconto del 40 % per gli over 65 if age > 65




form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Calcolo il prezzo base
    let price = pricePerKm * kmField.value;

    // Calcolo se scontare il prezzo per l'età
    if (ageField.value < 18) {
        price = price * 0.8;
    } else if (ageField.value > 65) {
        price = price * 0.6;
    }

    // Stampo il risultato
    resultElement.innerText = `${price.toFixed(2)}€`;
});