document.querySelector('#inscripcion').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#error').textContent = 'Datos incorrectos';
});
document.querySelector('#filtros').addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('#modalidad').value;
  let count = 0;
  for (const item of document.querySelectorAll('#cursos li')) {
    item.hidden = value !== 'todos' && item.dataset.modalidad !== value;
    if (!item.hidden) count++;
  }
});
const control = document.querySelector('#guardar');
let saved = false;
control.addEventListener('click', () => {
  saved = !saved;

  document.querySelector('#estado').textContent = saved
    ? 'Curso guardado'
    : 'Curso sin guardar';
});
const modal = document.querySelector('#modal');
document.querySelector('#abrir').addEventListener('click', () => (modal.hidden = false));
document.querySelector('#cerrar').addEventListener('click', () => (modal.hidden = true));
