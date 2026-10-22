const box = document.querySelector('#movimiento');
const button = document.querySelector('#pausa');
const status = document.querySelector('#estado-mov');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;

function render(announce) {
  box.classList.toggle('detenido', paused);
  button.hidden = preference.matches;
  button.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
  if (preference.matches) {
    status.textContent = 'Movimiento reducido por tu preferencia del sistema.';
  } else if (announce) {
    status.textContent = paused ? 'Movimiento en pausa.' : 'Movimiento reanudado.';
  } else {
    status.textContent = '';
  }
}

button.addEventListener('click', () => {
  paused = !paused;
  render(true);
});
preference.addEventListener('change', () => render(true));
render(false);
