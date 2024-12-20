document.getElementById('calculate').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Result = Please enter valid numbers.";
        return;
    }

    // Perform calculation
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultElement.textContent = "Result = Cannot divide by zero.";
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultElement.textContent = "Result = Invalid operator.";
            return;
    }

    // Display result
    resultElement.textContent = `Result = ${result.toFixed(2)}`;
});
