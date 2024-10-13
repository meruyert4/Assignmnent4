let name = prompt("Enter first name: ");
let surname = prompt("Enter second name: ");
let date = prompt("Enter your date of birth (YYYY-MM-DD): ");

let newdate = new Date(date);

let today = new Date();

let age = today.getFullYear() - newdate.getFullYear();
let monthDifference = today.getMonth() - newdate.getMonth();


if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < newdate.getDate())) {
    age--;
}
let sentence = `My name is ${name} ${surname} and i am ${age} years old.`;

console.log(sentence);