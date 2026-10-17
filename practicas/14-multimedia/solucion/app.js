const box = document.querySelector('#movimiento');
const button = document.querySelector('#pausa');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let paused = preference.matches;
function sync() {
  box.style.animationPlayState = paused ? 'paused' : 'running';
  button.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
  button.hidden = preference.matches;
}
button.addEventListener('click', () => {
  paused = !paused;
  sync();
});
preference.addEventListener('change', () => {
  paused = preference.matches;
  sync();
});
sync();
