const form = document.querySelector('#filtros');
const modalidad = document.querySelector('#modalidad');
const nivel = document.querySelector('#nivel');
const recuento = document.querySelector('#recuento');
const estadoVacio = document.querySelector('#sin-resultados');
const cursos = [...document.querySelectorAll('#cursos li')];
const botonRestablecer = document.querySelector('#restablecer');

function aplicarFiltros() {
  const modalidadSeleccionada = modalidad.value;
  const nivelSeleccionado = nivel.value;
  let visibles = 0;

  for (const curso of cursos) {
    const coincideModalidad =
      modalidadSeleccionada === 'todos' ||
      curso.dataset.modalidad === modalidadSeleccionada;
    const coincideNivel =
      nivelSeleccionado === 'todos' || curso.dataset.nivel === nivelSeleccionado;
    curso.hidden = !coincideModalidad || !coincideNivel;
    if (!curso.hidden) visibles++;
  }

  recuento.textContent = `${visibles} ${visibles === 1 ? 'curso disponible' : 'cursos disponibles'}.`;
  estadoVacio.hidden = visibles !== 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  aplicarFiltros();
});

botonRestablecer.addEventListener('click', () => {
  modalidad.value = 'todos';
  nivel.value = 'todos';
  aplicarFiltros();
  modalidad.focus();
});
