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



console.log(`Fist number: ${first}`)
console.log(`Second number: ${second}`)
console.log(`<br>`)
console.log(`Is first number greater than second? ${isgreate}`)
console.log(`Is first number less than second? ${isless}`)
console.log(`Is first number equal to second? ${isequal}`)