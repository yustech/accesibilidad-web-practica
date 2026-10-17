document.querySelector('#filtros').addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('#modalidad').value;
  let count = 0;
  for (const item of document.querySelectorAll('#cursos li')) {
    item.hidden = value !== 'todos' && item.dataset.modalidad !== value;
    if (!item.hidden) count++;
  }
  document.querySelector('#recuento').textContent = `${count} cursos disponibles.`;
});
