//Pillamops los id de cualquier elemento.
//El del buscador donde se introduce la variable complementaria al link
const buscarInput = document.getElementById('inputBuscador');

//El del boton
const botonInput = document.getElementById('boton');
//El de salida del nombre del pais buscado
const pais = document.getElementById('paisBuscado');
//El de su capital
const capital = document.getElementById('capital');
//Su imagen
const img = document.getElementById('imagenPais');
//Sus idiomas
const idioma = document.getElementById('idiomas');
//El de error
const textError = document.getElementById('text');

//Se añade un evento al boton para que cuando se pulse, se ejecute la funcion buscarPais
botonInput.addEventListener('click', buscarPais);

/**
 * Funcion para buscar un pais
 */
async function buscarPais () {
  resetearResultados();
  const url = `https://restcountries.com/v3.1/name/${buscarInput.value}`;
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    pais.textContent = data[0].name.common;
    //Un ternario que dice que si hay idiomas, los muestre, y si no, que muestre "No disponible"
    //Si no hay idiomas, se muestra un mensaje
    idioma.textContent = data[0].languages ? Object.values(data[0].languages).join(', ') : 'No disponible';
    //Si no hay capital, se muestra un mensaje
    if (!data[0].capital) {
      capital.textContent = 'No disponible';
    } else {
      capital.style.color = 'blue';
      capital.textContent = data[0].capital[0];
    }
    img.src = data[0].flags.png;


  } catch (error) {
    mostrarError('No se ha encontrado una palabra valida').style.color = 'red';
  }
}

function mostrarError (mensaje) {
  textError.textContent = mensaje
}

/*
 * Funcion que resetea los resultados
 */
function resetearResultados () {
  textError.textContent = '';
  pais.textContent = '';
  capital.textContent = '';
  img.src = '';
  idioma.textContent = '';
}