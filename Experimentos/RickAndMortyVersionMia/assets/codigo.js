/**
 * Constantes del codigo.
 */
const personajesSelect = document.getElementById('personajes')
const botonBuscar = document.getElementById('boton')
const nombre = document.getElementById('nombre')
const especie = document.getElementById('especie')
const genero = document.getElementById('genero')
const imagen = document.getElementById('imagen')
const apariciones = document.getElementById('apariciones')

//Segunda parte
const numeroEpisodioInput = document.getElementById('numeroEpisodio')
const buscarEpisodio = document.getElementById('buscarEpisodio')
const nombreEpisodio = document.getElementById('nombreEpisodio')
const personajesEpisodios = document.getElementById('personajesEpisodios')

const URL = 'https://rickandmortyapi.com/api/episode/'

/**
 * Evento de buscar con el boton de episodios
 */
buscarEpisodio.addEventListener('click', aparacionesEpisodios)
/**
 * Funcion para buscar las apariciones de personajes + nombre de un episodio
 */
async function aparacionesEpisodios () {
  //Numero del episodio
  const episodioId = numeroEpisodioInput.value
  //Busca el episodio por su id
  const response = await fetch(URL + episodioId)
  //Convierte la respuesta en un objeto JSON
  const data = await response.json()

  //Nombre del episodio
  nombreEpisodio.textContent = data.name

  //Limpiar la lista de personajes para evitar repeticiones
  personajesEpisodios.innerHTML = ''

  //En este for recorro el array con los personajes del episodio.
  //Este array es especial porque es un array con API de personajes.
  //Por ende debere repetir un proceso de conversion de json, para volver a esas apis en json
  data.characters.forEach(async characterUrl => {
    //Convierto las api en json
    const characterResponse = await fetch(characterUrl)
    const characterData = await characterResponse.json()

    //Creo un elemento li y le añado el nombre y la imagen del personaje
    const li = document.createElement('li')
    //Añado el li a la lista de personajes
    li.innerHTML = `<img src="${characterData.image}" alt="${characterData.name}" width="50"> ${characterData.name}`
    personajesEpisodios.appendChild(li)
  })
}
/**
 * Evento de buscar con el boton
 */
//botonBuscar.addEventListener('click', buscarPersonaje)
//Para el select
//No salen las opcioens en el select, buscar como arreglar
personajesSelect.addEventListener('change', selectOption)

/**
 * Funcion para buscar el personaje
 */
async function selectOption() {
  //Personaje seleccionado en el select

  //Numero del episodio
  const episodioId = numeroEpisodioInput.value
  //Busca el episodio por su id
  const response = await fetch(URL + episodioId)
  //Convierte la respuesta en un objeto JSON
  const data = await response.json()
  
  //Select valores
  if (data.characters.length > 0) {
    // Se crea una variable con el option de seleccionar una review por defecto
    //para que no se pueda seleccionar ninguna review por defecto
    //Y luego poder sumarle las opcioens que se vayan creando
    let optionsHTML = '<option value=""></option>'
    //Se recorre el array de reviews y se añade al option
    data.characters.forEach(async characterUrl => {
      //Se añade al option sumando cada una de las opciones, tipo
      //El select es una variable y se la va sumando cada una de las opciones que se van creando
      optionsHTML += `<option value="${characterUrl.name}">${characterUrl.name}</option>`
    })
    personajesSelect.innerHTML = optionsHTML;
  }
}
function buscarPersonaje() {
    data.characters.forEach(async characterUrl => {
      
    const characterResponse = await fetch(characterUrl)
    const characterData = await characterResponse.json()
    //Personajes valores
    nombre.textContent = characterData.name
    especie.textContent = characterData.species
    genero.textContent = characterData.gender
    imagen.src = characterData.image
    apariciones.textContent = characterData.episode.length

    // Cambiar el estilo de la tabla según el género
    if (characterData.gender === 'Male') {
      //Añade la clase
      document.getElementById('generoPersonje').classList.add('hombre')
      //Elimina la clase
      document.getElementById('generoPersonje').classList.remove('mujer')
    } else if (characterData.gender === 'Female') {
      //Añade la clase
      document.getElementById('generoPersonje').classList.add('mujer')
      //Elimina la clase
      document.getElementById('generoPersonje').classList.remove('hombre')
    }
})
}