let first = Number(prompt("Enter first number: "))
let second = Number(prompt("Enter second number: "))

let isgreate = false
let isless = false
let isequal = false

if (second < first){
    isgreate = true
} else if (second == first){
    isequal = true
} else{
    isless = true
}


document.write(`Fist number: ${first} <br>`)
document.write(`Second number: ${second} <br>`)
document.write(`<br>`)
document.write(`Is first number greater than second? ${isgreate} <br>`)
document.write(`Is first number less than second? ${isless} <br>`)
document.write(`Is first number equal to second? ${isequal} <br>`)