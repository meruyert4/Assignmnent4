let numcolors = Number(prompt("How many colors you want to input?"));

let colors = []

for (let i = 0; i<numcolors;i++){
    let color = prompt(`Enter colors ${i + 1}`);
    colors.push(color)
}

if (colors.length > 0){
    document.write(`First color: ${colors[0]} <br>`);
    document.write(`Last color: ${colors[colors.length - 1]} <br>`);
    console.log(`First color: ${colors[0]}`);
    console.log(`Last color: ${colors[colors.length - 1]}`);
} else{
    document.write(`No colors entered`);
    console.log(`No colors entered`);
}

