const modal = document.querySelector('#modal');
document.querySelector('#abrir').addEventListener('click', () => {
  modal.hidden = false;
});
document.querySelector('#cerrar').addEventListener('click', () => {
  modal.hidden = true;
});
