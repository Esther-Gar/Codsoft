let display = document.getElementById('display');

function appendCharacter(char) {
    if (display.textContent === '0' && char !== '.') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}