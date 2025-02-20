//Constantes de los objetos a manipular con javascript
//Numeros pedidos para realizar las operaciones de la calculadora
const numero1 = document.querySelector('#numeroPedido1')
const numero2 = document.querySelector('#numeroPedido2')
//Mensaje de error
const textError = document.querySelector('#text')
//Opciones del switch
const opcion = document.querySelector('#opcionesDadas')

//variable del resultado que se devuelve
let resultado = document.querySelector('#resultadoObtenido')

//Boton para calcular
const button = document.querySelector('#calcular');

//Evento de calculo
button.addEventListener("click", ()=> calculadora(opcion, numero1, numero2, resultado));

//Funcion calculadora donde esta las funciones del switch
//El switch llama a los metodos independientes de cada operacion
function calculadora (opcion, numero1, numero2, resultado) {
  const num1 = parseFloat(numero1.value);
  const num2 = parseFloat(numero2.value);

  switch (opcion.value) {
    case suma:
        if (!isNaN(num1) && !isNaN(num2)) {
    
            resultado.value = 'Resultado: ${num1 + num2}';
        
          } else {
            textError.textContent = 'Introduce un valor numerico valido';
          }
    case resta:
      break

    case multiplicar:
      break

    case dividir:
      break
  }
};
//Metodos de cada funcion
//Metodo para sumar
function sumar (numero1, numero2, resultado, textError) {
  
}
//Metodo para restar
function resta (numero1, numero2, resultado) {}
//Metodo para multiplicar
function multiplicar (numero1, numero2, resultado) {}
//Metodo para dividr
function dividir (numero1, numero2, resultado) {}
