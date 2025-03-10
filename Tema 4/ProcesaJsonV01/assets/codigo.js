/**
 * Procesa una api que posee la informacion en formato JSON.
 * Y devuelve los datos de una pelicula
 */

/**
 * Constantes que contienen el buscador de peliculas y sus espacios para rellenar los resultados encontrados
 */
const buscarInput = document.getElementById('inputBuscador');
const title = document.getElementById('titulo');
const year = document.getElementById('anyo');
const duration = document.getElementById('duracion');
const reviewsSelect = document.getElementById('reviews');
const reviewValor = document.getElementById('reviewRes');

//Mensaje de error
const textError = document.querySelector('#text');

/*
* Funcion que muestra un mensaje de error
*/
function mostrarError(mensaje) {
    textError.textContent = mensaje;
}

/*
* Funcion que resetea los resultados
*/
function resetearResultados() {
    title.textContent = '';
    year.textContent = '';
    duration.textContent = '';
    reviewsSelect.innerHTML = '<option value="">Selecciona una review</option>';
    reviewValor.textContent = '';
    textError.textContent = '';
}

//Boton para buscar
const button = document.querySelector('#boton');

//Evento de búsqueda
button.addEventListener("click", buscarPelicula);

//Evento de cambio en el select de reviews
//Necesario, si no no funciona.
//Se usa para input, select, textarea.
reviewsSelect.addEventListener("change", mostrarReview);

/**
 * Funcion para buscar una pelicula
 */
async function buscarPelicula() {
    //Resetea los resultados antes de realizar una nueva búsqueda
    resetearResultados();

    //Obtiene el valor del campo de búsqueda y convertirlo a minúsculas
    const buscadoPelicula = buscarInput.value.toLowerCase();
    try {
        //Realiza una petición a la API de omdbapi con el nombre de la pelicula
        const respuesta = await fetch(`http://www.omdbapi.com/?t=${buscadoPelicula}&apikey=6bd47da3`);
      
        //Convierte la respuesta a JSON
        const data = await respuesta.json();
  
        //Controla si la pelicula existe o esta dada
        if (data.Title == undefined ) {
            mostrarError('No se ha encontrado la película');
        }
        //Muestra los datos del pelicula en el contenedor de resultados
        title.textContent = data.Title;
        year.textContent = data.Year;
        duration.textContent = data.Runtime;

        // Llenar el select con las reviews usando innerHTML
        // Si no hay reviews, mostrar un mensaje en lugar de las opciones
        //Si el array es mayor a cero(por ende hay) Se recorre el array y se añade al select
        if (data.Ratings && data.Ratings.length > 0) {
            // Se crea una variable con el option de seleccionar una review por defecto
            //para que no se pueda seleccionar ninguna review por defecto
            //Y luego poder sumarle las opcioens que se vayan creando
            let optionsHTML = '<option value="">Selecciona una review</option>';
            //Se recorre el array de reviews y se añade al option
            data.Ratings.forEach(review => {
                //Se añade al option sumando cada una de las opciones, tipo
                //El select es una variable y se la va sumando cada una de las opciones que se van creando
                optionsHTML += `<option value="${review.Value}">${review.Source}</option>`;
            });
            //Se añade al select
            reviewsSelect.innerHTML = optionsHTML;
        } else {
            //Si no hay reviews mensaje de error
            reviewsSelect.innerHTML = '<option value="">No hay reviews disponibles</option>';
        }
    } catch (error) {
        // Si ocurre algún error durante la petición, se muestra un mensaje de error
        mostrarError('Ha ocurrido un error al buscar la película');
        console.error(error);
    }
}

/**
 * Funcion para mostrar el valor de la review seleccionada
 */
function mostrarReview() {
    //Obtiene el valor de la review seleccionada en el select, accendiendo al index de esta y obteniendo su valor (que anteriormente dimos en review.Value)
    const selectedReview = reviewsSelect.options[reviewsSelect.selectedIndex].value;
    //Muestra el valor de la review en el p de los resultados (Si tiene valor)
    reviewValor.innerHTML = selectedReview ? `${selectedReview}` : '';
}