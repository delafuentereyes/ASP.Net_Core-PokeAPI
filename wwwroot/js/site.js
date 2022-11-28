// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const lists__pokemons = document.getElementById('lists__pokemons')
const buttons = document.getElementById('buttons')
let urlPokemon = ' https://pokeapi.co/api/v2/pokemon?limit=151'
let templateHtml;
console.log('⏮⏩')

const GetPokemons = async (url) => { //obtiene los pokemones por la url
    try {
        const response = await fetch(url)
        const results = await response.json();
        console.log(results)
        DataPokemons(results.results)

    } catch (error) {
        console.log(error)
    }
}
GetPokemons(urlPokemon) 

const DataPokemons = async (data) => {
    lists__pokemons.innerHTML = '';
    try {
        for (let index of data) {

            const resp = await fetch(index.url) 
            const resul = await resp.json();
            console.log(resul)
            templateHtml = `
            <div class="pokemon__img">
            <img src=${resul.sprites.other.dream_world.front_default} alt=${resul.name}/> de aquí se saca la imagen
            <p>#${resul.id}</p> //de aqui se saca el id 
            <p>${resul.name}</p> //de aqui se saca el nombre
                <div class="types">
                    ${resul.types
                    .map((type) => {
                        return `<p>${type.type.name}</p>`; //de aqui se saca el tipo o los tipos
                    })
                    .join("")}
                </div>
            </div>
            `
            lists__pokemons.innerHTML += templateHtml //se "conecta" al html
        }

    } catch (error) {
        console.log(error)
    }
}

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        let value = e.target.dataset.url
        console.log(value)
        GetPokemons(value)
    }
})
