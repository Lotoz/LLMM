//Pillamops los id de cualquier elemento.
//El del buscador donde se introduce la variable complementaria al link
const buscarInput = document.querySelector('inputBuscador');

//El del boton
const botonInput = document.querySelector('boton');
//El de salida del nombre del pais buscado
const pais = document.querySelector('paisBuscado');
//El de su capital
const capital = document.querySelector('capital');
//Su imagen
const img = document.querySelector('imagenPais');
//Sus idiomas 
const idioma = document.querySelector('idiomas');

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

    pais.textContent = data.name.common;
    //capital.style.color = 'blue';
    /*capital.textContent = data.capital[0].forEach(element => {
      capital.innerHTML += `<li>${element.raw}</li>`
    });*/
    img.src = data.flags.png;
      //Impresion de lista
    /*data.data.meanings[0].senses.forEach(element => {
      originBuscado.innerHTML += `<li>${element.raw}</li>`
    });*/

  } catch (error) {
    mostrarError('No se ha encontrado una palabra valida').style.color = 'red';
  }
}

/*
 * Funcion que resetea los resultados
 */
function resetearResultados () {
  textError.textContent = '';
  pais.textContent = '';
  capital.textContent = '';
  img.textContent = '';
  idioma.textContent = '';
}