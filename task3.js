let number = prompt("Enter number: ");

let iseven = false;
let isodd = false;
let multof5 = false;
let greaterthan10 = false;

if(number % 2 == 1){
    isodd = true;
} else if(number % 2 == 0){
    iseven = true
}
if (number % 5 == 0){
    multof5 = true;
}
if (number > 10){
    greaterthan10 = true
}

document.write(`You entered: ${number} <br>`)
document.write(`Is the number even? ${iseven} <br>`)
document.write(`Is the number odd? ${isodd} <br>`)
document.write(`Is the number a multiple of 5? ${multof5} <br>`)
document.write(`Is the number greater than 10? ${greaterthan10} <br>`)
document.write(`The number is special!`)