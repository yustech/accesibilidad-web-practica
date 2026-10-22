export const cursos = [
  { titulo: 'HTML accesible', modalidad: 'online' },
  { titulo: 'CSS adaptable', modalidad: 'online' },
  { titulo: 'JavaScript accesible', modalidad: 'presencial' },
];
export const etiquetas = { todos: 'Todas', online: 'Online', presencial: 'Presencial' };
export const nombresVista = { catalogo: 'Catálogo', ayuda: 'Ayuda' };
const permitidos = ['react', 'vue', 'lit'];
const pedido = new URLSearchParams(location.search).get('fw');
export const marca = permitidos.includes(pedido) ? pedido : 'react';

export function leerEstado() {
  const params = new URLSearchParams(location.search);
  const vista = params.get('vista') === 'ayuda' ? 'ayuda' : 'catalogo';
  const modalidad = params.get('modalidad');
  return { vista, modalidad: modalidad in etiquetas ? modalidad : 'todos' };
}

export const tituloDocumento = (vista) => `${nombresVista[vista]} | ${marca}`;

export function filtrar(modalidad) {
  return cursos.filter((c) => modalidad === 'todos' || c.modalidad === modalidad);
}

export function mensajeRecuento(modalidad) {
  const n = filtrar(modalidad).length;
  const cursosTxt = n === 1 ? '1 curso disponible' : `${n} cursos disponibles`;
  return `Modalidad ${etiquetas[modalidad]}: ${cursosTxt}`;
}

function construirUrl(vista, modalidad) {
  const params = new URLSearchParams(location.search);
  if (vista === 'ayuda') params.set('vista', 'ayuda');
  else params.delete('vista');
  if (modalidad === 'todos') params.delete('modalidad');
  else params.set('modalidad', modalidad);
  return `${location.pathname}?${params}`;
}

// Navegar crea una entrada de historial; filtrar solo refleja el estado en la URL.
export const empujarVista = (vista, modalidad) =>
  history.pushState(null, '', construirUrl(vista, modalidad));
export const reflejarFiltro = (vista, modalidad) =>
  history.replaceState(null, '', construirUrl(vista, modalidad));
export const alVolver = (fn) => {
  addEventListener('popstate', fn);
  return () => removeEventListener('popstate', fn);
};

export function esActivacionNormal(e) {
  return e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey;
}

export const urlVista = construirUrl;
