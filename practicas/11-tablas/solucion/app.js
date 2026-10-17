const body = document.querySelector('tbody');
let ascending = false;
document.querySelector('#ordenar').addEventListener('click', () => {
  ascending = !ascending;
  const rows = [...body.rows].sort(
    (a, b) =>
      (Number(a.cells[1].textContent) - Number(b.cells[1].textContent)) *
      (ascending ? 1 : -1),
  );
  body.append(...rows);
  document
    .querySelector('#plazas')
    .setAttribute('aria-sort', ascending ? 'ascending' : 'descending');
  document.querySelector('#orden').textContent = ascending
    ? 'Ordenado de menos a más plazas.'
    : 'Ordenado de más a menos plazas.';
});
