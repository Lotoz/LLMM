/**
 * Calculadora compleja con bootstrap.
 * Debe ser capaz de concatenar los numeros y ser capaz de obtener los resultados segun el calculo
 * de basico debe ser capaz de sumar dos pero puede sumar mas
 * Importante, toda operacion se debe realizar por boton
 */
/**
 * Constantes a usar
 */
const buttons = document.querySelectorAll("boton");
const display = document.querySelector("vista");
const borrar = document.querySelector("reset");
const resultado = document.querySelector("resultado");
let operandoActual;
buttons.forEach(op => {
    buttons.addEventListener("click", () =>{
        if (op !== "") {
            display.value = ""
            operandoActual += buttons.value;
            display.value = operandoActual;
        } 
    }
    )
})