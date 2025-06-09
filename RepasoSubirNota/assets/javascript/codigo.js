/**
 * Para buscar palabra. Examen
 */

//Boton para buscar
const button = document.querySelector('#boton')
//Input del boton
const buscarInput = document.getElementById('inputBuscador')

//Palabra buscada
const palabraSalida = document.querySelector('#palabraBuscada')

const originBuscado = document.querySelector('#originBuscado')

//Evento de búsqueda
button.addEventListener('click', buscarPalabra)

/**
 * Funcion para buscar una pelicula
 */
async function buscarPalabra () {
  resetearResultados()
  const url = `https://rae-api.com/api/words/${buscarInput.value}`
  try {
    //Pillamos el link
    const respuesta = await fetch(url)
    const data = await respuesta.json()

    palabraSalida.style.color = 'green'
    palabraSalida.innerHTML = data.data.word + ` (${data.data.meanings[0].origin.raw})`

    data.data.meanings[0].senses.forEach(element => {
      originBuscado.innerHTML += `<li>${element.raw}</li>`
    })
  } catch (error) {
    mostrarError('No se ha encontrado una palabra valida').style.color = 'red';
  }
}

//Mensaje de error
const textError = document.querySelector('#text')

/*
 * Funcion que muestra un mensaje de error
 */
function mostrarError (mensaje) {
  textError.textContent = mensaje
}

/*
 * Funcion que resetea los resultados
 */
function resetearResultados () {
  textError.textContent = ''
  palabraSalida.innerHTML = ''
  originBuscado.innerHTML = ''
}