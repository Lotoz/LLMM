//Constantes del html
//Input de donde ingresa la palabra a buscar
const inputPalabra = document.querySelector('#inputPalabra');

//Boton de buscar
const boton = document.querySelector('#buscarPalabra');

//Resultado de la busqueda
const resultado = document.querySelector('#resultadoPalabra');

//Evento click del boton
boton.addEventListener("click", buscarPalabra);

async function buscarPalabra() {
    resetearResultados();
    const url = `https://rae-api.com/api/words/${inputPalabra.value}`;
    try {
        const response = await fetch(url);
        const respuesta = await response.json();

        if (
            respuesta.ok &&
            respuesta.data &&
            respuesta.data.word &&
            respuesta.data.meanings &&
            respuesta.data.meanings.length > 0
        ) {
            resultado.style.color = 'green';
            const senses = respuesta.data.meanings[0].senses;
            resultado.innerHTML = `<b>${respuesta.data.word}</b>`;

            if (senses && senses.length > 0) {
                // Crear select
                const select = document.createElement('select');
                select.id = 'definicionSelect';
                senses.forEach((sense, idx) => {
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = `Definición ${idx + 1}`;
                    select.appendChild(option);
                });

                // Contenedor para la definición
                const definicionDiv = document.createElement('div');
                definicionDiv.id = 'definicionTexto';
                definicionDiv.innerHTML = senses[0].raw;

                // Evento para cambiar definición
                select.addEventListener('change', function() {
                    definicionDiv.innerHTML = senses[this.value].raw;
                });

                resultado.appendChild(document.createElement('br'));
                resultado.appendChild(select);
                resultado.appendChild(definicionDiv);
            }
        } else {
            mostrarError('No se ha encontrado una palabra válida');
        }
    } catch (error) {
        mostrarError('No se ha encontrado una palabra válida');
    }
}
function resetearResultados() {
    resultado.innerHTML = '';
}
function mostrarError(mensaje) {
    resultado.style.color = 'red';
    resultado.innerHTML = `<p>${mensaje}</p>`;
}