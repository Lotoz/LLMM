//Constantes del encabezado
// Numero del episodio ingresado por el usuario
const numeroEpisodioInput = document.getElementById('numeroEpisodio');
// Botón para buscar el episodio
const buscarEpisodio = document.getElementById('buscarEpisodio');
// Nombre del episodio
const nombreEpisodio = document.getElementById('nombreEpisodio');
// Lista de personajes que aparecen en el episodio
const personajesEpisodios = document.getElementById('personajesEpisodios');

// Evento de buscar con el boton de episodios
buscarEpisodio.addEventListener("click", aparacionesEpisodios);

// Evento delegado para click en la lista de personajes
/*Funciona del siguiente modo:
1. Se escucha el evento click en la lista de personajes.
2. Se verifica si el elemento que se ha hecho click es una imagen (IMG).
3. Si es una imagen, se obtiene el id del personaje desde el atributo data-id de la imagen.
4. Se llama a la función buscarPersonaje con el id del personaje.
Esto permite que al hacer click en cualquier imagen de personaje dentro de la lista, se busque y muestre la información del personaje correspondiente.
*/
personajesEpisodios.addEventListener("click", function(event) {
    if (event.target.tagName === 'IMG') {
        const personajeId = event.target.dataset.id;
        buscarPersonaje(personajeId);
    }
});
/**
 * Funcion para buscar las apariciones de personajes + nombre de un episodio
 */
async function aparacionesEpisodios() {
    const episodioId = numeroEpisodioInput.value;
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodioId}`);
    const data = await response.json();

    nombreEpisodio.textContent = data.name;
    personajesEpisodios.innerHTML = '';

    data.characters.forEach(async (characterUrl) => {
        const characterResponse = await fetch(characterUrl);
        const characterData = await characterResponse.json();
        // Crear el li con el id en el img
        const li = document.createElement('li');
        li.innerHTML = `<img src="${characterData.image}" alt="${characterData.name}" width="50" data-id="${characterData.id}"> ${characterData.name}`;
        personajesEpisodios.appendChild(li);
    });
}

//Constantes a usar 
const nombre = document.getElementById('nombre');
const estado = document.getElementById('estado');
const especie = document.getElementById('especie');
const genero = document.getElementById('genero');
const origen = document.getElementById('origen');
const imagen = document.getElementById('imagen');

/**
 * Funcion para buscar el personaje
 * El usuario debe clickear sobre la imagen del personaje que se genera en la lista de personajes del episodio
 * y se guarda su id en un mapa para luego buscarlo por su id
 * El personaje se busca por su id y se muestra en la tabla de personajes
 */

async function buscarPersonaje(personajeId) {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${personajeId}`);
    const data = await respuesta.json();

    nombre.textContent = data.name;
    estado.textContent = data.status;
    especie.textContent = data.species || "Desconocida";
    genero.textContent = data.gender;
    origen.textContent = data.origin.name;
    imagen.innerHTML = `<img src="${data.image}" alt="${data.name}" width="80">`;

    // Cambiar el estilo de la tabla según el género
    if (data.gender === "Male") {
        //Añade la clase
        document.querySelector('.generoPersonaje').classList.add('hombre');
        //Elimina la clase
        document.querySelector('.generoPersonaje').classList.remove('mujer', 'otro');

    } else if (data.gender === "Female") {
        //Añade la clase
        document.querySelector('.generoPersonaje').classList.add('mujer');
        //Elimina la clase
        document.querySelector('.generoPersonaje').classList.remove('hombre', 'otro');
    } else {
        // Si el género no es ni masculino ni femenino, eliminamos ambas clases
        document.querySelector('.generoPersonaje').classList.remove('hombre', 'mujer');
        // Y se lo otorga la clase "otro"
        document.querySelector('.generoPersonaje').classList.add('otro');
    }
}