//Constantes de las id de html
const boton = document.querySelector('#boton');
//Salida temperatura
const temperatura = document.querySelector('#temperatura');
//Salida lluvia
const lluviaActual = document.querySelector('#lluviaActual');
//Salida precipitaciones
const precipitaciones = document.querySelector('#precipitaciones');
//Salida velocidad del viento
const velocidadViento = document.querySelector('#velocidadViento');
//Salida fecha actual
const fechaActual = document.querySelector('#fechaActual');
//Salida error, no deberia salir pero por si sucede algun fallo
const textError = document.querySelector('#error');

// Añadimos el evento click al botón para que actualice la url
boton.addEventListener("click", actualizarClima);

async function actualizarClima() {
    resetearResultados();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=36.702&longitude=-4.4203&timezone=Europe%2FBerlin&current=`;
    try {
        //Generamos un metodo por cada consulta
        consultarTemperatura(url);
        consultarLLuvia(url);
        consultarPrecipitacion(url);
        consultarViento(url);

        // Hacemos la petición para la fecha actual
        const response = await fetch(url); 
         // Parseamos la respuesta a JSON
        const respuesta = await response.json();
        //Para imprimir la fecha
        fechaActual.textContent = respuesta.current.time;
    } catch (error) {
        mostrarError("Ha fallado la actualizacion de la URL");
    }
}
//Para consultar la temperatura
async function consultarTemperatura(url) {
    const tempURL = url + "temperature_2m";
    try {
        // Hacemos la petición
        const response = await fetch(tempURL); 
         // Parseamos la respuesta a JSON
        const respuesta = await response.json();
        //Sacamos los datos entorno a la respuesta
        temperatura.textContent = respuesta.current.temperature_2m;
    } catch (error) {
        mostrarError("Ha fallado la temperatura");
    }
}
//Para consultar la lluvia
async function consultarLLuvia(url) {
    const lluviaURL = url + "rain";
    try {
        // Hacemos la petición
        const response = await fetch(lluviaURL); 
         // Parseamos la respuesta a JSON
        const respuesta = await response.json();
        //Realizamos un if para agregar la imagen
        if (respuesta.current.rain > 0) {
        //Añade la clase
        document.querySelector('.imagen').classList.add('imagenLluvia');
        //Elimina la clase
        document.querySelector('.imagen').classList.remove('imagenSol');
        } else {
        //Añade la clase
        document.querySelector('.imagen').classList.add('imagenSol');
        //Elimina la clase
        document.querySelector('.imagen').classList.remove('imagenLluvia');
        }
        //Sacamos los datos entorno a la respuesta
        lluviaActual.textContent = respuesta.current.rain;
    } catch (error) {
        mostrarError("Ha fallado la lluvia.");
    }
}
//Consultar consultar Precipitacion
async function consultarPrecipitacion(url) {
    const preciURL = url + "precipitation";
    try {
        // Hacemos la petición
        const response = await fetch(preciURL); 
         // Parseamos la respuesta a JSON
        const respuesta = await response.json();
        //Sacamos los datos entorno a la respuesta
        precipitaciones.textContent = respuesta.current.precipitation;
    } catch (error) {
        mostrarError("Ha fallado la precipitaciones.");
    }
}
//Consultar velocidad del tiempo
async function consultarViento(url) {
     const preciURL = url + "wind_speed_10m";
    try {
        // Hacemos la petición
        const response = await fetch(preciURL); 
         // Parseamos la respuesta a JSON
        const respuesta = await response.json();
        //Sacamos los datos entorno a la respuesta
        velocidadViento.textContent = respuesta.current.wind_speed_10m;
    } catch (error) {
        mostrarError("Ha fallado la precipitaciones.");
    }
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    textError.innerHTML = `<p>${mensaje}</p>`;
}
//Para resetear las salidas
function resetearResultados() {
    temperatura.textContent = "";
    lluviaActual.textContent = "";
    precipitaciones.textContent = "";
    velocidadViento.textContent = "";
    fechaActual.textContent = "";
    textError.textContent = "";
}