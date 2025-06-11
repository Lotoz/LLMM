//input de entrada del pokemon
const inputEntrada = document.querySelector('#inputBuscador');

//Boton de busqueda
const botonBuscar = document.querySelector('#boton');

//Evento al boton
botonBuscar.addEventListener("click", buscarPokemon);
//Constantes de resultados
const nombre = document.querySelector('#nombrePokemon');
const altura = document.querySelector('#alturaPokemon');
const tipos = document.querySelector('#tiposPokemon');
const imagen = document.querySelector('#imagenPokemon');
const textError = document.querySelector('#text');

let spritesActuales = null; // Variable global para guardar los sprites

async function buscarPokemon() {
    resetearResultados();
    const url = `https://pokeapi.co/api/v2/pokemon/${inputEntrada.value.toLowerCase()}`;
    try {
        const response = await fetch(url);
        const respuesta = await response.json();
        nombre.textContent = respuesta.name;
        altura.textContent = respuesta.height / 10 + 'm';
        const tiposPokemon = respuesta.types.map(tipo => tipo.type.name).join(', ');
        tipos.textContent = tiposPokemon;
        // Guardamos los sprites para usarlos en cambiarPokemon
        spritesActuales = respuesta.sprites;
        // Mostramos la imagen normal por defecto
        imagen.src = spritesActuales.front_default;
        imagen.alt = `Imagen de ${respuesta.name}`;
        cambiarPokemon();
    } catch (error) {
        mostrarError('No se ha encontrado un Pokémon válido');
    }
}

const selectPokemon = document.querySelector('#selectPokemon');
//Evento al select
selectPokemon.addEventListener('change', cambiarPokemon);
//Se añade un evento que te permite cambiar la imagen del pokemon por medio de un select, asi el usuario puede ver al pokemon shiny y normal
function cambiarPokemon() {
    if (!spritesActuales) return;
    const valorSelect = selectPokemon.value;
    if (valorSelect === 'shiny') {
        imagen.src = spritesActuales.front_shiny;
    } else {
        imagen.src = spritesActuales.front_default;
    }
}

function resetearResultados() {
   nombre.textContent = '';
   altura.textContent = '';
   tipos.textContent = '';
   imagen.src = '';
   textError.textContent = '';
   selectPokemon.value = 'normal'; // Reseteamos el select a la opción normal
   imagen.alt = ''; // Reseteamos el alt de la imagen   
   spritesActuales = null; // Reseteamos los sprites
}
function mostrarError(mensaje) { 
    textError.textContent = mensaje;
}