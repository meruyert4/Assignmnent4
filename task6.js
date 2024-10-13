let numcolors = Number(prompt("How many colors you want to input?"));

let colors = []

for (let i = 0; i<numcolors;i++){
    let color = prompt(`Enter colors ${i + 1}`);
    colors.push(color)
}

if (colors.length > 0){
    console.log(`First color: ${colors[0]}`);
    console.log(`Last color: ${colors[colors.length - 1]}`);
} else{
    console.log(`No colors entered`);
}


