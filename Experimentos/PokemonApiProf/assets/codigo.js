const button = document.querySelector("#buscar");
button.addEventListener("click", buscarPokemon);

/**
 * Busca el pokemon y muestra los datos en la tabla
 * NOTA: Es async porque emplea await para esperar a que llegue la respuesta
 */

async function buscarPokemon() {

    const namePokemon = document.querySelector("#pokemonName").value;
    //Creamos la url colocando el texto de búsqueda en su sitio
    const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

    const nombre = document.querySelector(".nombre");
    const imagen = document.querySelector(".imagen");
    const altura = document.querySelector(".altura");
    const tipo = document.querySelector(".tipos");
    tipo.innerHTML=``;

    //Capturamos los posibles errores
    try {
        //Obtenemos la respuesta
        const respuesta = await fetch(url);
        //Procesamos la respuesta a un objeto data javascript
        const data = await respuesta.json();

        //Mostramos los datos en las casillas correspondientes
        nombre.innerHTML = `<h3>${data.name}</h3>`;
        imagen.src = `${data.sprites.front_default}`;
        altura.innerHTML = `<h3>${data.height}</h3>`;
        //Recorremos el array de tipos y los mostramos en la lista
        data.types.forEach(element => {
            tipo.innerHTML = tipo.innerHTML + `<li>${element.type.name}</li>`;
        });

    } catch (error) {
        //Mostramos que no se ha encontrado el pokemon y los posibles errores que puedan suceder
        imagen.src="";
        tipo.innerHTML=``;
        altura.innerHTML=``;
        nombre.innerHTML=`<p>No se encontró el Pokemon</p>`;
        console.error("Error al obtener datos", error);
    }

}