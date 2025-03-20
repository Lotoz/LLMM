
/**
 * Constantes del codigo.
 */
const personajesSelect = document.getElementById('personajes');
const botonBuscar = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const especie = document.getElementById('especie');
const genero = document.getElementById('genero');
const imagen = document.getElementById('imagen');
const apariciones = document.getElementById('apariciones');

//Segunda parte
const numeroEpisodioInput = document.getElementById('numeroEpisodio');
const buscarEpisodio = document.getElementById('buscarEpisodio');
const nombreEpisodio = document.getElementById('nombreEpisodio');
const personajesEpisodios = document.getElementById('personajesEpisodios');


/**
 * Evento de buscar con el boton
 */
botonBuscar.addEventListener("click", buscarPersonaje);


/**
 * Funcion para buscar el personaje
 */
async function buscarPersonaje() {
    //Personaje seleccionado en el select
    const personajeId = personajesSelect.value;
    //Busca el personaje por su nombre dado de valor en las opciones del select
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${personajeId}`);
    //Convierte la respuesta en un objeto JSON
    const data = await respuesta.json();

    //Asigna los valores del personaje a los elementos HTML
    nombre.textContent = data.name;
    especie.textContent = data.species;
    genero.textContent = data.gender;
    imagen.src = data.image;
    apariciones.textContent = data.episode.length;

    // Cambiar el estilo de la tabla según el género
    if (data.gender === "Male") {
        //Añade la clase
        document.getElementById('generoPersonje').classList.add('hombre');
        //Elimina la clase
        document.getElementById('generoPersonje').classList.remove('mujer');
    } else if (data.gender === "Female") {
        //Añade la clase
        document.getElementById('generoPersonje').classList.add('mujer');
        //Elimina la clase
        document.getElementById('generoPersonje').classList.remove('hombre');
    }
}
/**
 * Evento de buscar con el boton de episodios
 */
buscarEpisodio.addEventListener("click", aparacionesEpisodios);

/**
 * Funcion para buscar las apariciones de personajes + nombre de un episodio
 */
async function aparacionesEpisodios() {

    //Numero del episodio
    const episodioId = numeroEpisodioInput.value;
    //Busca el episodio por su id
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodioId}`);
    //Convierte la respuesta en un objeto JSON
    const data = await response.json();

    //Nombre del episodio
    nombreEpisodio.textContent = data.name;

    //Limpiar la lista de personajes para evitar repeticiones
    personajesEpisodios.innerHTML = ''; 

    //En este for recorro el array con los personajes del episodio.
    //Este array es especial porque es un array con API de personajes.
    //Por ende debere repetir un proceso de conversion de json, para volver a esas apis en json
    data.characters.forEach(async (characterUrl) => {
        //Convierto las api en json
        const characterResponse = await fetch(characterUrl);
        const characterData = await characterResponse.json();

        //Creo un elemento li y le añado el nombre y la imagen del personaje
        const li = document.createElement('li');
        //Añado el li a la lista de personajes
        li.innerHTML = `<img src="${characterData.image}" alt="${characterData.name}" width="50"> ${characterData.name}`;
        personajesEpisodios.appendChild(li);
    });
}