//Primero se ha realizado las cajas sin fotografia
//Capa 1
const evento1 = document.querySelector('.cambiarColor');

//Funcion
//En esta capa cuando pasa el raton por encima la letra cambia de color
evento1.addEventListener("mouseenter", () => {evento1.style.color = "red";});
evento1.addEventListener("mouseleave", () => {evento1.style.color = "black";});

//Capa3
//En esta capa cuando el cursor entra, cambia la imagen

const evento2 = document.querySelector(".imagen2");

evento2.addEventListener("mouseover", cambiarImagen);

function cambiarImagen() {
    //guardamos en una variable el nombre de la imagen
    const image = document.querySelector(".imagen2");
    const nombreImagen = image.src.split("/").pop();
    
    if (nombreImagen === "ghost.png") {
        image.src = "./assets/rajoy.png";
    } else {
        image.src = "./assets/ghost.png";
    }
}
//Capa 5
//En esta capa el usuario ingresa una edad entre 1 y 100. 
//Si es correcto es borde verde
//Si es incorrecto es borde rojo
const evento3 = document.querySelector("#botonEdad");
evento3.addEventListener("click", verificaEdad);

function verificaEdad() {
    const input = document.querySelector("#input");
    const num = parseInt(input.value);
    if (!isNaN(num)) {
        if (num >= 1 && num <= 100) {
            input.style.borderColor = "green";
            alert("El número es válido");
        } else {
            input.style.borderColor = "red";
            alert("El número no es válido");
        }
    } else {
        input.style.borderColor = "red";
        alert("Por favor, ingrese un número válido");
    }
}
//Cambiar el estilo segun el boton
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const a = document.querySelector(".caja9");

boton1.addEventListener("click", () => {
    a.style.color = "white";
    a.style.backgroundColor = "black";
});
boton2.addEventListener("click", () => {
    a.style.color = "black";
    a.style.backgroundColor = "white";
});
boton3.addEventListener("click", () => {
    a.style.color = "red";
    a.style.backgroundColor = "grey";
});

//Cambia el color del fondo de negro a rojo y viceversa
//No funciona
const capa =document.querySelectorAll(".fondoNegro");
const b1 = document.querySelector(".boton");
b1.addEventListener("click",() => cambiaFondos(capa));

function cambiaFondos(capa) {
    capa.forEach(a => {a.classList.toggle("fondoRojo")})
};
