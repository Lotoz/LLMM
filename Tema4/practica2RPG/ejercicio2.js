//Titulos
const encabezado = "Estado del héroe:";
const tituloCombate = "Estado del héroe después del combate:";

//Constantes
const nombre = "Exarion";
const armaPrincipal = "Espada del Destino";

//Variables
let nivel = 5;
let vida = 100;
let armaSecundaria = "Arco Simple";
let armor = true;

//Salida de texto
console.log(encabezado,"\nNombre: ",nombre,"\nNivel: ",nivel,"\nPuntos de vida: ", vida, "\nArma principal: ",armaPrincipal,"\nArma secundaria: ",armaSecundaria,"\nTiene armadura: ",armor);

//Entrada en combate
 console.log("Has entrado en combate");
 console.log("--------------");
 //Aumento de nivel
 nivel++;
//Resta de vida
vida = vida - 30;
//Resultado del combate
console.log("Resultados del combate");
console.log("--------------");
console.log(encabezado,"\nNombre: ",nombre,"\nNivel: ",nivel,"\nPuntos de vida: ", vida, "\nArma principal: ",armaPrincipal,"\nArma secundaria: ",armaSecundaria,"\nTiene armadura: ",armor);

//Nuevas variables
let nivelCadena = nivel.toString();
let puntosFloat = parseFloat(vida);

//Impresion de las nuevas variables
console.log("Nuevo nivel:", nivelCadena, "\nNuevos puntos de vida:", puntosFloat);

//Mejora del heroe
let painBase = 50;
let multCritico = 2;
let probCritico = 0.50;
let esCritico = probCritico>Math.random();
let painTotal = esCritico ? painBase * multCritico : painBase;
//Impresion por consola
console.log("El heroe infliege", painTotal, "de daño porque esCritico tiene valor", esCritico);

//Sistema de nivel
let dificultad = 3;
let expActual = 0;
let expGanada = 150;
const expNextLevel = 100;


expActual += expGanada;
if (expActual > expNextLevel){
   nivel++;
   expActual -= expNextLevel;
   console.log("Sube de nivel! (Musiquita)")
   console.log("Experiencia sobrante:", expActual)
} else if ( expActual < expNextLevel){
    let diffLevel =expNextLevel - expActual ;
   console.log("La experiencia del heroe es de: ",expActual, "Le falta para subir de nivel:", diffLevel);
}

//Recogida de recursos y atuendos

//Monedas
let monedasXCofre = [10,30,20];
let monedas = 0;
for(let i = 0; i < monedasXCofre.length ; i++){
    monedas += monedasXCofre[i];
}
console.log("Monedas ganadas:", monedas);

//Atuendos
let atuendos = ["Duende", "Caballero", "Arquero"];
atuendos.push("Mago")
atuendos.forEach((elemento, indice) => {
    console.log(indice, elemento);
});

//Pociones de salud
//Vida esta en 70
let pocionVida = 40;
function curacion (vida, pocionVida) {
    let curacion = Math.min(vida+pocionVida,100);
    return curacion;
}
console.log("Vida curada: ", curacion(vida,pocionVida))