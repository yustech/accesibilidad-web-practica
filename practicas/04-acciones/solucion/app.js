const control = document.querySelector('#guardar');
let saved = false;
control.addEventListener('click', () => {
  saved = !saved;
  control.setAttribute('aria-pressed', String(saved));
  document.querySelector('#estado').textContent = saved
    ? 'Curso guardado'
    : 'Curso sin guardar';
});
