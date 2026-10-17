const control = document.querySelector('#guardar');
let saved = false;
control.addEventListener('click', () => {
  saved = !saved;

  document.querySelector('#estado').textContent = saved
    ? 'Curso guardado'
    : 'Curso sin guardar';
});
