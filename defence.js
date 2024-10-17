/* 
    
*/

let number = prompt(Number("Enter number 1-12: "))

function numberValidate(number){
    if (number >= 1 && number <=12){
        return true
    }
    return false
}

const months = ['january', 'february','march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

if (!numberValidate(number)){
    console.log("Enter number between 1-12")
} else{
    console.log(months[number - 1])
}