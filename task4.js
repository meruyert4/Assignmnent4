let number = prompt("Enter number: ")
let string = prompt("Enter string: ")
let bool = prompt("Enter boolean: ")

number = Number(number)
bool = bool.toLowerCase() == 'true' 

document.write(`Number Input: ${number}, Data type: ${typeof number} <br>`)
document.write(`String Input: ${string}, Data type: ${typeof string} <br>`)
document.write(`Bool Input: ${bool}, Data type: ${typeof bool} <br>`)
