let count = 0;
const counterDisplay = document.getElementById('counter-value');

function updateDisplay() {
    counterDisplay.innerText = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}