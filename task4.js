let number = prompt("Enter number: ")
let string = prompt("Enter string: ")
let bool = prompt("Enter boolean: ")

number = parseInt(number)
bool = bool.toLowerCase() == 'true' 


console.log(`Number Input: ${number}, Data type: ${typeof number}`)
console.log(`String Input: ${string}, Data type: ${typeof string}`)
console.log(`Bool Input: ${bool}, Data type: ${typeof bool}`)
