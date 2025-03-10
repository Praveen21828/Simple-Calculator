const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            currentInput = '';
            result.value = '0';
        } else if (button.classList.contains('delete')) {
            currentInput = currentInput.slice(0, -1);
            result.value = currentInput === '' ? '0' : currentInput;
        } else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput).toString();
                result.value = currentInput;
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            currentInput += buttonText;
            result.value = currentInput;
        }
    });
});
