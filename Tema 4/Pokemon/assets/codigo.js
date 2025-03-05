/**
 * Codigo para buscar en la API de PokeAPI
 * En este codigo se realiza una peticion a la API de PokeAPI para buscar un pokemon
 * y mostrar su informacion en la pagina web
 */
/**Constante que contiene la URL de la API de PokeAPI */
const URL = 'https://pokeapi.co/api/v2/pokemon/';

/**
 * Constantes que contienen el buscador de pokemon y el contendor donde se mostrara la informacion
 */
const buscarInput = document.getElementById('inputBuscador');
const pokemonContainer = document.getElementById('contenedorPokemon');
const namePokemon = document.getElementById('nombrePokemon');
const imgPokemon = document.getElementById('imagenPokemon');
const typePokemon = document.getElementById('tiposPokemon');
const heightPokemon = document.getElementById('alturaPokemon');

// Mensaje de error
const textError = document.querySelector('#text');

/*
* Funcion que muestra un mensaje de error en el contenedor de resultados
*/
function mostrarError(mensaje) {
    textError.textContent = mensaje;
}

/*
* Funcion que resetea los resultados en el contenedor de resultados
*/
function resetearResultados() {
    namePokemon.textContent = '';
    imgPokemon.src = '';
    typePokemon.textContent = '';
    heightPokemon.textContent = '';
    textError.textContent = '';
}

// Boton para buscar
const button = document.querySelector('#boton');

// Evento de búsqueda
button.addEventListener("click", buscarPokemon);

// Función para buscar un Pokémon
async function buscarPokemon() {
    // Resetear los resultados antes de realizar una nueva búsqueda
    resetearResultados();

    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    const buscadoPokemon = buscarInput.value.toLowerCase();
    try {
        // Realizar una petición a la API de PokeAPI con el nombre del Pokémon
        const response = await fetch(URL + buscadoPokemon);
        
        //Controla si el pokemon esta dado
        if (!response.ok) {
            // Si la respuesta no es exitosa, muestra un mensaje de error
            mostrarError(`No se encontró ningún Pokémon llamado "${buscadoPokemon}"`);
            return;
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Mostrar los datos del Pokémon en el contenedor de resultados
        namePokemon.textContent = data.name;
        imgPokemon.src = data.sprites.front_default;
        heightPokemon.textContent = data.height;
        typePokemon.textContent = data.types.map(type => type.type.name).join(', ');
    } catch (error) {
        // Si ocurre algún error durante la petición, mostrar un mensaje de error
        mostrarError('Ha ocurrido un error al buscar el Pokémon');
        console.error(error);
    }
}