/**
 * Calculadora simple
 * @author Lotoz
 * Es una calculadora de calculos basicos
 */

// Constantes para trabajar con html

//Numeros pedidos para realizar las operaciones de la calculadora
const numero1 = document.querySelector('#numeroPedido1');
const numero2 = document.querySelector('#numeroPedido2');

// Mensaje de error
const textError = document.querySelector('#text');

// Select para trabajar las opciones del switch
const opcion = document.querySelector('#opcionesDadas');

// Variable del resultado que se devuelve
let resultado = document.querySelector('#resultadoObtenido');

// Boton para calcular
const button = document.querySelector('#calcular');

// Evento de calculo
button.addEventListener("click", () => calculadora(opcion.value, numero1, numero2, resultado));
// IMPORTANTE SE DEBE PONER AQUI EL .VALUE PARA QUE FUNCIONE
// SINO NO PILLA LA INFORMACIÓN DE LOS INPUTS

/**
 * Función calculadora; donde están las funciones del switch
 * El switch llama a los métodos independientes de cada operación
 * @param {*} opcion 
 * @param {*} numero1 
 * @param {*} numero2 
 * @param {*} resultado 
 */
function calculadora(opcion, numero1, numero2, resultado) {
  const num1 = parseFloat(numero1.value);
  const num2 = parseFloat(numero2.value);

  switch (opcion) {
    case 'suma':
      sumar(num1, num2, resultado, textError);
      break;
    case 'resta':
      restar(num1, num2, resultado, textError);
      break;
    case 'multiplicar':
      multiplicar(num1, num2, resultado, textError);
      break;
    case 'dividir':
      dividir(num1, num2, resultado, textError);
      break;
    default:
      textError.textContent = 'Selecciona una operación válida';
  }
}

// Métodos de cada función
/**
 * Sumar dos numeros
 * si los valores son numericos se suman
 * si no muestra un mensaje de error
 * @param {*} numero1 
 * @param {*} numero2 
 * @param {*} resultado 
 * @param {*} textError 
 */
function sumar(numero1, numero2, resultado, textError) {
  if (!isNaN(numero1) && !isNaN(numero2)) {
    resultado.value = `${numero1 + numero2}`;
  } else {
    textError.textContent = 'Introduce un valor numérico válido';
  }
}

/**
 * Restar dos numeros
 * si los valores son numericos se restan
 * si no muestra un mensaje de error
 * @param {*} numero1 
 * @param {*} numero2 
 * @param {*} resultado 
 * @param {*} textError 
 */
function restar(numero1, numero2, resultado, textError) {
  if (!isNaN(numero1) && !isNaN(numero2)) {
    resultado.value = `${numero1 - numero2}`;
  } else {
    textError.textContent = 'Introduce un valor numérico válido';
  }
}

/**
 * Multiplicar dos numeros
 * si los valores son numericos se multiplican
 * si no muestra un mensaje de error
 * @param {*} numero1 
 * @param {*} numero2 
 * @param {*} resultado 
 * @param {*} textError 
 */
function multiplicar(numero1, numero2, resultado, textError) {
  if (!isNaN(numero1) && !isNaN(numero2)) {
    resultado.value = `${numero1 * numero2}`;
  } else {
    textError.textContent = 'Introduce un valor numérico válido';
  }
}

/**
 * Dividir dos numeros
 * si los valores son numericos se dividen
 * si el segundo valor es 0 muestra un mensaje de error
 * Y si no son numericos muestra un mensaje de error
 * @param {*} numero1 
 * @param {*} numero2 
 * @param {*} resultado 
 * @param {*} textError 
 */
function dividir(numero1, numero2, resultado, textError) {
  if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero2 !== 0) {
      resultado.value = `${numero1 / numero2}`;
    } else {
      textError.textContent = 'No se puede dividir por cero';
    }
  } else {
    textError.textContent = 'Introduce un valor numérico válido';
  }
}