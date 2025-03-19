/**
 * Para buscar palabra. Examen
 */

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
}

//Boton para buscar
const button = document.querySelector('#boton')
//Input del boton
const buscarInput = document.querySelector('#inputBuscador')

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
    palabraSalida.innerHTML = ''
    originBuscado.innerHTML = ''
    const respuesta = await fetch(url)
    const data = await respuesta.json()

    palabraSalida.style.color = 'green'
    palabraSalida.innerHTML =
      data.data.word + ` (${data.data.meanings[0].origin.raw})`

    data.data.meanings[0].senses.forEach(element => {
      originBuscado.innerHTML += `<li>${element.raw}</li>`
    })
  } catch (error) {
    palabraSalida.style.color = 'red'
    palabraSalida.innerHTML = 'No se ha encontrado una palabra'
    originBuscado.innerHTML = ''
  }
}
