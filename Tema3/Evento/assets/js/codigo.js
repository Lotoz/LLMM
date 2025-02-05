//Con clase
const p1 = document.querySelector(".niidea");
//Con etiqueta entera
const b = document.querySelector("body");
//Con ID
const p2 = document.querySelector("#doble");

//Ahora creamos el evento
p1.addEventListener("click",()=>alert('Parrafo 1 click'));
b.addEventListener("Load", mensaje());
p2.addEventListener('dblclick', () => alert('Parrafo 2 click'));
function mensaje(){
    alert("Pagina Cargada");
}