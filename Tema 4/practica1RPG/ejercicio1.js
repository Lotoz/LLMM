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