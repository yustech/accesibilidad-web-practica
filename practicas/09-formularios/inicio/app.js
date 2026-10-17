document.querySelector('#inscripcion').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#error').textContent = 'Datos incorrectos';
});
