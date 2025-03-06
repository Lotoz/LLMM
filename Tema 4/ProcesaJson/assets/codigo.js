/**
 * Procesa una api que pose la informacion en formato JSON.
 * Y devuelve una pelicula
 */


/**
 * Constantes que contienen el buscador de peliculas y sus espacios para rellenar los resultados encontrados
 */
const buscarInput = document.getElementById('inputBuscador');
const title = document.getElementById('titulo');
const year = document.getElementById('anyo');
const duration = document.getElementById('duracion');

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
    title.textContent = '';
    year.textContent = '';
    duration.textContent = '';
    textError.textContent = '';
}

// Boton para buscar
const button = document.querySelector('#boton');

// Evento de búsqueda
button.addEventListener("click", buscarPelicula);

/**
 * Funcion para buscar una pelicula
 */
async function buscarPelicula() {
    // Resetear los resultados antes de realizar una nueva búsqueda
    resetearResultados();

    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    const buscadoPelicula = buscarInput.value.toLowerCase();
    try {
        // Realizar una petición a la API de omdbapi con el nombre de la pelicula
        const respuesta = await fetch(`http://www.omdbapi.com/?t=${buscadoPelicula}&apikey=6bd47da3`);
        
        //Controla si el pelicula esta dado
        if (!respuesta.ok) {
            // Si la respuesta no es exitosa, muestra un mensaje de error
            mostrarError(`No se encontró ninguna pelicula llamada "${buscadoPelicula}"`);
        }

        // Convertir la respuesta a JSON
        const data = await respuesta.json();

        // Mostrar los datos del pelicula en el contenedor de resultados

        //CAMBIAR ESTO
        title.textContent = data.Title;
        year.textContent = data.Year;
        duration.textContent = data.Runtime;

    } catch (error) {
        // Si ocurre algún error durante la petición, mostrar un mensaje de error
        mostrarError('Ha ocurrido un error al buscar el pelicula');
        console.error(error);
    }
}