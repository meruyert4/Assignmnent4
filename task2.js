let age = prompt("Enter your age: ")

if (age >= 18){
    result = "Yes"
} else{
    result = "No"
}


document.write(`Age: ${age} <br>`)
document.write(`Driver's License: ${result}`)