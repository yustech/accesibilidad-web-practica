const rango = document.querySelector('#duracion');
const salida = document.querySelector('#valor');
const menos = document.querySelector('#menos');
const mas = document.querySelector('#mas');
const entrada = document.querySelector('#entrada');

function sincronizar() {
  const valor = rango.valueAsNumber;
  salida.textContent = `${valor} horas`;
  rango.setAttribute('aria-valuetext', `${valor} horas`);
  // Un botón desactivado no puede tener el foco: si lo tenía, pasa al rango.
  const activo = document.activeElement;
  menos.disabled = valor === Number(rango.min);
  mas.disabled = valor === Number(rango.max);
  if (activo instanceof HTMLButtonElement && activo.disabled) rango.focus();
}
rango.addEventListener('input', sincronizar);
menos.addEventListener('click', () => {
  rango.stepDown();
  sincronizar();
});
mas.addEventListener('click', () => {
  rango.stepUp();
  sincronizar();
});
sincronizar();

// Registro no vivo del tipo de entrada, útil para anotar pruebas táctiles.
const tipos = { touch: 'táctil', pen: 'lápiz', mouse: 'ratón' };
document.addEventListener('pointerdown', (e) => {
  entrada.textContent = `Última entrada detectada: ${tipos[e.pointerType] ?? e.pointerType}.`;
});
document.addEventListener('keydown', (e) => {
  if (['Tab', 'Enter', ' ', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
    entrada.textContent = 'Última entrada detectada: teclado.';
  }
});

const diapositivas = [...document.querySelectorAll('.slide')];
const posicion = document.querySelector('#posicion');
const modo = document.querySelector('#modo');
const botonRotacion = document.querySelector('#rotacion');
const carrusel = document.querySelector('[aria-roledescription="carrusel"]');
const reducido = matchMedia('(prefers-reduced-motion: reduce)');
let actual = 0;
let temporizador = null;
let pausaTemporal = false;

function mostrar(desplazamiento) {
  actual = (actual + desplazamiento + diapositivas.length) % diapositivas.length;
  diapositivas.forEach((d, i) => {
    d.hidden = i !== actual;
  });
  posicion.textContent = `Curso ${actual + 1} de ${diapositivas.length}: ${diapositivas[actual].querySelector('h3').textContent}`;
}

function detener() {
  clearInterval(temporizador);
  temporizador = null;
}
function arrancar() {
  detener();
  if (!pausaTemporal) temporizador = setInterval(() => mostrar(1), 5000);
}
function activarRotacion(activa) {
  botonRotacion.setAttribute('aria-pressed', String(activa));
  botonRotacion.textContent = activa
    ? 'Detener rotación automática'
    : 'Iniciar rotación automática';
  // Durante la rotación no se anuncia cada cambio; al detenerla vuelve a anunciarse.
  posicion.setAttribute('aria-live', activa ? 'off' : 'polite');
  modo.textContent = activa
    ? 'Rotación automática activa. Se pausa al pasar el puntero o enfocar el carrusel.'
    : 'Avance manual. La rotación automática está desactivada.';
  if (activa) arrancar();
  else detener();
}

botonRotacion.addEventListener('click', () => {
  if (reducido.matches && botonRotacion.getAttribute('aria-pressed') === 'false') {
    modo.textContent =
      'La rotación automática no está disponible porque tu sistema pide reducir el movimiento.';
    return;
  }
  activarRotacion(botonRotacion.getAttribute('aria-pressed') === 'false');
});
document.querySelector('#anterior').addEventListener('click', () => mostrar(-1));
document.querySelector('#siguiente').addEventListener('click', () => mostrar(1));

function pausar(valor) {
  pausaTemporal = valor;
  if (botonRotacion.getAttribute('aria-pressed') === 'true') {
    if (valor) detener();
    else arrancar();
  }
}
carrusel.addEventListener('mouseenter', () => pausar(true));
carrusel.addEventListener('mouseleave', () =>
  pausar(carrusel.contains(document.activeElement)),
);
carrusel.addEventListener('focusin', () => pausar(true));
carrusel.addEventListener('focusout', (e) => {
  if (!carrusel.contains(e.relatedTarget)) pausar(carrusel.matches(':hover'));
});
reducido.addEventListener('change', () => {
  if (reducido.matches) activarRotacion(false);
});
