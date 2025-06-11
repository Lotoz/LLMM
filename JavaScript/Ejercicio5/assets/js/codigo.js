// Seleccionamos los elementos del DOM necesarios
const boton = document.querySelector('#boton'); // Botón de búsqueda
const inputPelicula = document.querySelector('#inputBuscador'); // Input de búsqueda
const titulo = document.querySelector('#tituloPelicula'); // Celda para el título
const year = document.querySelector('#anioPelicula'); // Celda para el año
const duracion = document.querySelector('#duracionPelicula'); // Celda para la duración
const textError = document.querySelector('#error'); // Contenedor de errores
const contenedorRating = document.querySelector('#rating'); // Contenedor para los ratings

// Añadimos el evento click al botón para buscar la película
boton.addEventListener("click", buscarPelicula);

// Función principal para buscar la película en la API OMDB
async function buscarPelicula() {
    resetearResultados(); // Limpiamos resultados anteriores
    const url = `https://www.omdbapi.com/?t=${inputPelicula.value}&apikey=6bd47da3`; // Construimos la URL de la API
    try {
        const response = await fetch(url); // Hacemos la petición
        const respuesta = await response.json(); // Parseamos la respuesta a JSON
        if (respuesta.Response === "False") { // Si no se encuentra la película
            mostrarError('No se ha encontrado una película válida');
            return;
        }
        // Mostramos los datos principales en la tabla
        titulo.innerHTML = `<p>${respuesta.Title}</p>`;
        year.innerHTML = `<p>${respuesta.Year}</p>`;
        duracion.innerHTML = `<p>${respuesta.Runtime}</p>`;
        // Mostramos los ratings
        devuelveRating(respuesta.Ratings);
    } catch (error) {
        mostrarError('Error al buscar la película');
    }
}

// Función para limpiar los resultados anteriores
function resetearResultados() {
    titulo.innerHTML = "";
    year.innerHTML = "";
    duracion.innerHTML = "";
    textError.innerHTML = "";
    contenedorRating.innerHTML = "";
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    textError.innerHTML = `<p>${mensaje}</p>`;
}

// Función para mostrar los ratings de la película
function devuelveRating(ratings) {
    contenedorRating.innerHTML = ""; // Limpiamos el contenedor

    if (!ratings || ratings.length === 0) return; // Si no hay ratings, salimos

    // Si solo hay una review, mostramos solo el mensaje y el valor
    if(ratings.length === 1){
        contenedorRating.innerHTML = `<p class="review">El medio ${ratings[0].Source} ha valorado la película con un valor de ${ratings[0].Value}</p>`;
        return;
    }

    // Si hay más de una review, creamos un select para elegir el medio
    const select = document.createElement('select');
    select.id = "selectRating";

    // Añadimos una opción por cada medio de valoración
    ratings.forEach((rating) => {
        const option = document.createElement('option');
        option.value = rating.Source;
        option.textContent = rating.Source;
        select.appendChild(option);
    });

    // Creamos el span para mostrar el valor del rating seleccionado
    const valor = document.createElement('span');
    valor.style.marginLeft = "10px";
    valor.textContent = ratings[0].Value; // Mostramos el valor del primer medio por defecto

    // Creamos el mensaje personalizado
    const mensaje = document.createElement('div');
    mensaje.style.marginTop = "10px";
    // Obtenemos el título de la película del DOM (puede contener espacios o etiquetas)
    const tituloPeli = document.querySelector('#tituloPelicula').textContent;
    mensaje.style.color = 'red';     // Cambiamos el color del mensaje
    mensaje.textContent = `El medio ${ratings[0].Source} ha valorado la película ${tituloPeli} con un valor de ${ratings[0].Value}`;

    // Evento para actualizar el valor y el mensaje cuando se cambia el select
    select.addEventListener('change', function() {
        const selectedValue = this.value; // Medio seleccionado
        const selectedRating = ratings.find(rating => rating.Source === selectedValue); // Buscamos el rating correspondiente
        valor.textContent = selectedRating ? selectedRating.Value : ''; // Mostramos el valor
        mensaje.textContent = selectedRating
            ? `El medio ${selectedRating.Source} ha valorado la película ${tituloPeli} con un valor de ${selectedRating.Value}`
            : '';
    });
    // Añadimos los elementos al contenedor en el orden deseado
    contenedorRating.appendChild(select);
    contenedorRating.appendChild(mensaje);
} 