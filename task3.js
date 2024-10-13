const number = parseInt(prompt("Enter a number:"));

const isEven = number % 2 === 0;
const isOdd = number % 2 !== 0;

const isMultipleOf5 = number % 5 === 0;
const isGreaterThan10 = number > 10;

console.log(`You entered: ${number}`);
console.log(`Is the number even? ${isEven}`);
console.log(`Is the number odd? ${isOdd}`);
console.log(`Is the number a multiple of 5? ${isMultipleOf5}`);
console.log(`Is the number greater than 10? ${isGreaterThan10}`);

if (isMultipleOf5 || isGreaterThan10) {
    console.log("The number is special!");
}
