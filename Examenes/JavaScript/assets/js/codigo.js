
/**
 * Para buscar palabra. Examen
 */

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
    textError.textContent = '';
}

//Boton para buscar
const button = document.querySelector('#boton');
//Input del boton
const buscarInput = document.querySelector('#inputBuscador');

//Palabra buscada
const palabraSalida = document.querySelector('#palabraBuscada');


const originBuscado = document.getElementById('#originBuscado');


//Evento de búsqueda
button.addEventListener("click", buscarPalabra);


/**
 * Funcion para buscar una pelicula
 */
async function buscarPalabra() {
    resetearResultados()
   
    const buscado = buscarInput.value;
    const url = (`https://rae-api.com/api/words/` + buscado);
        try {
       
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        if (!data.ok) {
            mostrarError('No se ha encontrado la palabra');
        }

        palabraSalida.innerText =  data.data.word + ` (${data.data.meanings[0].origin.raw})`;
        
        let significado;
        data.data.meanings[0].senses.forEach(element => {
        
        significado += `<li>${element.raw}</li>`;
        
        });
        originBuscado.innerHTML = significado;
    
        } catch (error) {
            mostrarError('No se ha encontrado una palabra');
        }
}
