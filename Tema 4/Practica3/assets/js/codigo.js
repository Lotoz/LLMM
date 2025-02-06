//Constantes
const title = document.querySelector('.titulo');
const evento1 = document.querySelector('.caja1');
const evento2 = document.querySelector('.caja2');
const evento3 = document.querySelector('.caja3');
const evento4 = document.querySelector('.caja4');
const evento5 = document.querySelector('.caja5');
const evento6 = document.querySelector('.caja6');

//Evento 0 Cambiar de color el titulo

//Evento 1
evento1.addEventListener('click', () => alert('Hello! My friend!'));

//Evento 2
evento2.addEventListener("click", masMenor());
function mayorMenor () {
  const num = parseInt(prompt('Introduce un número:'))
  const num2 = parseInt(prompt('Introduce un número:'))
  if (!isNaN(num)) {
    if (!isNaN(num2)) {
      if (num < num2) {
        alert(num + 'Es menor que' + num2)
      } else if (num > num2) {
        alert(num + 'Es mayor que' + num2)
      } else if (num == num2) {
        alert(num + 'Son iguales' + num2)
      }
    } else {
      alert('Introduce un número válido.')
    }
  } else {
    alert('Introduce un número válido.')
  }
}


