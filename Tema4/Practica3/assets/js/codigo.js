//Constantes
const title = document.querySelector('body')
const evento1 = document.querySelector('.verMensaje1')
const evento2 = document.querySelector('.imagen1')
const evento3 = document.querySelector('.imagen2')
const evento4 = document.querySelector('.verMensaje2')
const evento5 = document.querySelector('.boton')
const evento6 = document.querySelector('.multiplicar')

//Evento 0
//No funciona ver porque
title.addEventListener('Load', () => alert('Hello! My friend!'))

//Evento 1
//Al clickear muestra un mensaje
evento1.addEventListener('click', () => alert('Hello! My friend!'))

//Evento 2
//Al clickear pide dos numeros y te dice cual es el maximo
evento2.addEventListener('click', max)

function max () {
  let num = parseInt(prompt('Introduce un número:'))
  let num2 = parseInt(prompt('Introduce un número:'))

  if (!isNaN(num)) {
    if (!isNaN(num2)) {
      alert('El número máximo es ' + Math.max(num, num2))
    } else {
      alert('Introduce un número válido.')
    }
  } else {
    alert('Introduce un número válido.')
  }
}

//Evento 3
//Al salir el mouse del cuadro te  pide dos numeros y te dice cual es par o impar
evento3.addEventListener('mouseleave', parImpar)

function parImpar () {
  let num = parseInt(prompt('Introduce un número:'))

  if (!isNaN(num)) {
    if (num % 2 == 0) {
      alert('Es par.')
    } else {
      alert('Es impar')
    }
  }
}

//Evento 4
//Al doble click muestra un mensaje
evento4.addEventListener('dblclick', () => alert('Hello! My Friend!'))

//Evento 5
//Al hacer click hace un contador
evento5.addEventListener('click', clickear)

let a = 0
function clickear () {
  a++
  alert('Haz clickeado: ' + a)
}

//Evento 6
//Al pasar el mouse por la imagen te pide dos numeros y los multiplica
evento6.addEventListener('mouseenter', multiplicar)

function multiplicar () {
  let num = parseInt(prompt('Introduce un número:'))
  let num2 = parseInt(prompt('Introduce un número:'))

  if (!isNaN(num)) {
    if (!isNaN(num2)) {
      let multiplicacion = num * num2
      alert('el resultado es: ' + multiplicacion)
    }
  }
}
