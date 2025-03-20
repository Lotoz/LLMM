/**
 *  Version 2 de la calculadora
 *  Probando hacer los botonoes de forma independiente
 *  terminar luego
 * */ 

/**
 * Constantes y variables 
 */
const BOTONESNUM = document.querySelectorAll("#botonNum");
const BOTONESCAL = document.querySelectorAll("#botonCalculo");
const DISPLAY = document.querySelector("#vista");
const BORRAR = document.querySelector("#reset");
const RESULTADO = document.querySelector("#resultado");
// Variables
let primerOp = "";
let segundoOP = "";
let operacion = "";
let resultado = 0;

BOTONESNUM.forEach(button => {
    button.addEventListener("click", () => {
        const valor = button.value;
        if (!isNaN(valor) || valor === ".") {
            // Si es un número o un punto decimal
            if (operacion === "") {
                // Si no hay operación
                primerOP += valor;
                DISPLAY.value = primerOP;
            } else {
                // Si hay operación
                segundoOP += valor;
                DISPLAY.value = segundoOP;
            }
        }
    });
});

BOTONESCAL.forEach(button => {
    button.addEventListener("click", () => {
        const valor = button.value;
        if (valor === "+" || valor === "-" || valor === "x" || valor === "/") {
            // Si es una operación
            if (segundoOP !== "") {
                // Si ya hay un segundo operando
                primerOP = realizarOperacion();
                segundoOP = "";
            }
            // Asignar la operación
            operacion = valor;
        }
    });
});
