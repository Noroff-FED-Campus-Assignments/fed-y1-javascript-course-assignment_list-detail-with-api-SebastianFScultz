const pokemonContainer = document.querySelector(".pokemon-container");

const pokemon_number = 150;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5"
};

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const res = await fetch(url);
        const pokemon = await res.json();
    
        createPokemonCard(pokemon);
        
    } catch(error) {
        detailContainer.innerHTML = displayError("An error occurred");
    }
    
}

fetchPokemon();


function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const poke_types = pokemon.types.map(el => el.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
    <a href="details.html?id=${pokemon.id}" class="card">
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt"pokemon picture" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
            <h3 class="name">${name}</h3>
            <p class="type">Type: <span>${type}</span></p>
        </div>
    </a>`;

    pokemonEl.innerHTML = pokeInnerHTML;

    pokemonContainer.appendChild(pokemonEl);
}

function displayError(message) {
    return `<div class="error">${message}</div>`;
}