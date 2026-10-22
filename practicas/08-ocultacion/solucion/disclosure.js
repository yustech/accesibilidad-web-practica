const boton = document.querySelector('#ayuda');
const panel = document.querySelector('#panel');

const destino = document.querySelector('#instrucciones');

function alternar(abrir) {
  boton.setAttribute('aria-expanded', String(abrir));
  panel.hidden = !abrir;
}

boton.addEventListener('click', () => {
  alternar(boton.getAttribute('aria-expanded') !== 'true');
});

// Escape cierra el panel y devuelve el foco al botón.
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && !panel.hidden) {
    alternar(false);
    boton.focus();
  }
});

// Cierra la ayuda al seguir el enlace y mueve el foco a la sección de destino.
panel.querySelector('a').addEventListener('click', (evento) => {
  evento.preventDefault();
  alternar(false);
  destino.focus();
  destino.scrollIntoView();
});
