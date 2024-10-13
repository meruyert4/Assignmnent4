let numfruits = Number(prompt("How many fruits do you want to add?"))

let fruits = []

for(let i=0;i<numfruits;i++){
    let fruit = prompt(`Enter ${i + 1} fruit`)
    fruits.push(fruit)
}
fruits.pop()

let newfruit = prompt("Add new fruit to the beginning of an array: ")
fruits.unshift(newfruit)

console.log(fruits)

