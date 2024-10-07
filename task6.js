let numcolors = Number(prompt("How many colors you want to input?"));

let colors = []

for (let i = 0; i<numcolors;i++){
    let color = prompt(`Enter colors ${i + 1}`);
    colors.push(color)
}

if (colors.length > 0){
    document.write(`First color: ${colors[0]} <br>`);
    document.write(`Last color: ${colors[colors.length - 1]} <br>`);
} else{
    document.write(`No colors entered`);
}