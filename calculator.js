let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = calculate();
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '' || operator === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    currentInput = '';
    firstOperand = result;
    operator = '';
    return result;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    document.getElementById('display').value = '';
}
