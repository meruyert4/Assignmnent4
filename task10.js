let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

let operation = prompt("Enter an operation (add, subtract, multiply, divide): ").toLowerCase();

function calculate(num1, num2, operation) {
    switch(operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operation. ";
    }
}

let result = calculate(num1, num2, operation);

console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
console.log("Operation: " + operation);
console.log("Result: " + result);