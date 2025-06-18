const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let result = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.value;

    if (val === '=') {
      try {
        result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else if (btn.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
    } else {
      currentInput += val;
      display.textContent = currentInput;
    }
  });
});
