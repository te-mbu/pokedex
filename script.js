// Insert your code here
for (let i = 1; i < 16; i++) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {
        // Get pokemon name and capitalize first letter 
        let name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        // Get pokemon type
        let type = data.types[0].type.name
        // Add pokemon to html
        let addPokemon = `
        <div class="pokemon ${type}">
        <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${name}" />
        </div>
        <div class="info">
        <h3 class="name">${name}</h3>
        <span class="type">Type: <span>${type}</span></span>
        </div>
        </div>
        `
        document.querySelector("#pokemonContainer").innerHTML += addPokemon
    })
}

let click = 0
let start = 1
let end = 16
document.querySelector("#next").addEventListener("click", function() {
    click++;

    let indexStart = start + click * 15
    let indexEnd = end + click * 15
    for (let i = indexStart; i < indexEnd; i++) {
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            
            // Get pokemon name and capitalize first letter 
            let name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            // Get pokemon type
            let type = data.types[0].type.name
            // Add pokemon to html
            let addPokemon = `
            <div class="pokemon ${type}">
            <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${name}" />
            </div>
            <div class="info">
            <h3 class="name">${name}</h3>
            <span class="type">Type: <span>${type}</span></span>
            </div>
            </div>
            `
            document.querySelector("#pokemonContainer").innerHTML += addPokemon
        })
    }
})
