const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (resultDisplayed) {
      if (!['+', '-', '*', '/'].includes(value)) {
        currentInput = '';
      }
      resultDisplayed = false;
    }
    if (value) {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});

equals.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result;
    resultDisplayed = true;
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.innerText = '0';
});