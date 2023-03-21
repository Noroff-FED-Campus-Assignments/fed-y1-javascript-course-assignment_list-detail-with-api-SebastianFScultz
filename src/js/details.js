const detailContainer = document.querySelector(".detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://pokeapi.co/api/v2/pokemon/" + id;

async function fetchPokemon() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details);

    } catch(error) {
        detailContainer.innerHTML = displayError("An error occurred");
    }
}

fetchPokemon();

function createHtml(details) {

    const pokemon = {
        name: details.name,
        id: details.id,
        image: details.sprites["front_default"],
        type: details.types.map((type) => type.type.name).join(", ")
    };

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    detailContainer.innerHTML = `<h2>${name}</h2>
    <img class="details-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt"pokemon picture"></div>
    <p>#${pokemon.id.toString().padStart(3, "0")}</p>
    <p>Type: ${pokemon.type}</p>`;
    

}

function displayError(message) {
    return `<div class="error">${message}</div>`;
}


