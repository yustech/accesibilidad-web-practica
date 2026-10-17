document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#estado').textContent = 'Hecho';
});
