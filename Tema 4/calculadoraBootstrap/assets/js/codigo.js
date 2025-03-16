/**
 * Calculadora compleja con bootstrap.
 * Debe ser capaz de concatenar los numeros y ser capaz de obtener los resultados segun el calculo
 * de basico debe ser capaz de sumar dos pero puede sumar mas
 * Importante, toda operacion se debe realizar por boton
 */

/**
 * Constantes y variables
 */
const BOTONES = document.querySelectorAll(".boton");
const DISPLAY = document.querySelector("#vista");
const BORRAR = document.querySelector("#reset");
const RESULTADO = document.querySelector("#resultado");
let primerOP = "";
let segundoOP = "";
let operacion = "";

/**
 * Eventos para los botones de números y punto decimal
 * Concatena los números y el punto decimal
 * Si hay una operación, el número se asigna al segundo operando
 * Si no hay una operación, el número se asigna al primer operando
 * Si se presiona un punto decimal, se agrega al número actual
 * Si se presiona una operación, se asigna la operación
 */
BOTONES.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        if (!isNaN(value) || value === ".") {
            // Si es un número o un punto decimal
            if (operacion === "") {
                // Si no hay operación
                primerOP += value;
                DISPLAY.value = primerOP;
            } else {
                // Si hay operación
                segundoOP += value;
                DISPLAY.value = segundoOP;
            }
        // Si es una operación
        } else if (value === "+" || value === "-" || value === "x" || value === "/") {
            // Si es una operación
            if (segundoOP !== "") {
                // Si ya hay un segundo operando
                primerOP = realizarOperacion();
                segundoOP = "";
            }
            // Asignar la operación
            operacion = value;
        }
    });
});

/**
 * Evento para el botón de resultado
 * Realiza la operación y muestra el resultado
 */
RESULTADO.addEventListener("click", () => {
    // Si hay un segundo operando
    if (segundoOP !== "") {
        // Mostrar el resultado
        DISPLAY.value = realizarOperacion();
        primerOP = DISPLAY.value;
        segundoOP = "";
        operacion = "";
    }
});

/**
 * Evento para el botón de borrar
 * Limpia los valores
 */
BORRAR.addEventListener("click", () => {
    // Limpiar los valores
    primerOP = "";
    segundoOP = "";
    operacion = "";
    DISPLAY.value = "";
});

/**
 * Realiza la operación correspondiente
 * @returns {number} El resultado de la operación
 */
function realizarOperacion() {
    // Convertir los operandos a números
    const num1 = parseFloat(primerOP);
    const num2 = parseFloat(segundoOP);
    let resultado = 0;

    // Realizar la operación
    switch (operacion) {
        case "+":
            // Suma
            resultado = num1 + num2;
            break;
        case "-":
            // Resta
            resultado = num1 - num2;
            break;
        case "x":
            // Multiplicación
            resultado = num1 * num2;
            break;
        case "/":
            // División
            resultado = num1 / num2;
            break;
    }
    // Devuelve el resultado
    return RESULTADO.value = resultado;
}