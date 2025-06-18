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

// Keyboard input support
document.addEventListener('keydown', (e) => {
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];

  if (allowedKeys.includes(e.key)) {
    currentInput += e.key;
    display.textContent = currentInput;
  } else if (e.key === 'Enter') {
    try {
      result = eval(currentInput);
      display.textContent = result;
      currentInput = result.toString();
    } catch {
      display.textContent = 'Error';
      currentInput = '';
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
  } else if (e.key.toLowerCase() === 'c') {
    currentInput = '';
    display.textContent = '0';
  }
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
