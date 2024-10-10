function area(width, lenght){
    return width * lenght;
}

let width = Number(prompt("Enter width: "));
let lenght = Number(prompt("Enter lenght: "));

let res = area(width, lenght);

document.write(`Initial Lenght: ${lenght} <br>`)
document.write(`Initial Width: ${width} <br>`)
document.write(`Initial Area: ${res} <br>`)

console.log(`Initial Lenght: ${lenght}`)
console.log(`Initial Width: ${width}`)
console.log(`Initial Area: ${res}`)

let update = prompt("Will you update your choice(lenght/width) ? ").toLowerCase();

if (update == "lenght"){
    let newlenght = Number(prompt("Enter new lenght: "));
    lenght = newlenght;
} else if (update = "width"){
    let newwidth = Number(prompt("Enter new width: "));
    width = newwidth;
} else{
    document.write("Invalid choice");
}


let newarea = area(width, lenght)
document.write(`<br>`)
document.write(`Lenght: ${lenght} <br>`)
document.write(`Width: ${width} <br>`)
document.write(`New area: ${newarea} <br>`)


console.log(`<br>`)
console.log(`Lenght: ${lenght}`)
console.log(`Width: ${width}`)
console.log(`New area: ${newarea}`)