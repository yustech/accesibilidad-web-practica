export const vistas = {
  inicio: { titulo: 'Catálogo de cursos', texto: 'Elige una formación.' },
  ayuda: {
    titulo: 'Ayuda para la inscripción',
    texto: 'Contacta con el equipo docente si necesitas apoyo.',
  },
  noEncontrada: {
    titulo: 'Vista no encontrada',
    texto: 'La vista solicitada no existe. Puedes volver al catálogo o abrir la ayuda.',
  },
};

export function leerVista() {
  const nombre = new URLSearchParams(location.search).get('vista') || 'inicio';
  return nombre in vistas && nombre !== 'noEncontrada' ? nombre : 'noEncontrada';
}

export function tituloDocumento(nombre) {
  return `${vistas[nombre].titulo} | Portal de formación`;
}

export function urlVista(nombre) {
  const url = new URL(location.href);
  url.searchParams.set('vista', nombre);
  return `${url.pathname}${url.search}`;
}

// Solo se intercepta la activación normal: Ctrl, Cmd, Mayús, Alt o clic secundario conservan el enlace.
export function esActivacionNormal(event) {
  return !(
    event.button !== 0 ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.altKey
  );
}

export function empujarHistorial(nombre) {
  history.pushState({ vista: nombre }, '', urlVista(nombre));
}

export function alVolver(callback) {
  const escuchar = () => callback(leerVista());
  addEventListener('popstate', escuchar);
  return () => removeEventListener('popstate', escuchar);
}
