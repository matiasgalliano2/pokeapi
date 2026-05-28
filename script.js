async function obtenerPokemon(nombre) {

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`

    try {

        const respuesta = await fetch(url)

        if (!respuesta.ok) {
            throw new Error("Pokemon no encontrado")
        }

        const data = await respuesta.json()

        mostrarPokemon(data)

    } catch(error) {

        document.getElementById("resultado").innerHTML = `
            <p>${error}</p>
        `
    }
}
function buscarPokemon() {

    const nombrePokemon = document
        .getElementById("pokemonInput")
        .value
        .toLowerCase()

    obtenerPokemon(nombrePokemon)
}

function pokemonRandom() {

    const numeroRandom = Math.floor(Math.random() * 151) + 1

    obtenerPokemon(numeroRandom)
}

function mostrarPokemon(pokemon) {

    const resultado = document.getElementById("resultado")

    resultado.innerHTML = `
    
        <div class="card">

            <h2>${pokemon.name}</h2>

            <img src="${pokemon.sprites.front_default}">

            <div class="stats">

                <p><strong>ID:</strong> ${pokemon.id}</p>

                <p><strong>Tipo:</strong> ${pokemon.types[0].type.name}</p>

                <p><strong>HP:</strong> ${pokemon.stats[0].base_stat}</p>

                <p><strong>Ataque:</strong> ${pokemon.stats[1].base_stat}</p>

                <p><strong>Defensa:</strong> ${pokemon.stats[2].base_stat}</p>

                <p><strong>Peso:</strong> ${pokemon.weight}</p>

                <p><strong>Habilidades:</strong> ${pokemon.abilities[0].ability.name}</p>
                

            </div>

        </div>
    `
}