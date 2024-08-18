let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}

function multiple(value) {
  if (display.value !== '') {
    display.value = parseFloat(display.value) * value;
  }
}
