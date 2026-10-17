const range = document.querySelector('#duracion');
const output = document.querySelector('#valor');
const less = document.querySelector('#menos');
const more = document.querySelector('#mas');
function syncRange() {
  const value = range.valueAsNumber;
  output.textContent = `${value} horas`;
  range.setAttribute('aria-valuetext', `${value} horas`);
  less.disabled = value === Number(range.min);
  more.disabled = value === Number(range.max);
}
range.addEventListener('input', syncRange);
less.addEventListener('click', () => {
  range.stepDown();
  syncRange();
});
more.addEventListener('click', () => {
  range.stepUp();
  syncRange();
});
syncRange();
const slides = [...document.querySelectorAll('.slide')];
let current = 0;
function showSlide(offset) {
  current = (current + offset + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.hidden = index !== current;
  });
  document.querySelector('#posicion').textContent =
    `Curso ${current + 1} de ${slides.length}: ${slides[current].querySelector('h3').textContent}`;
  // Se conserva el foco en el botón que ha activado el cambio.
}
document.querySelector('#anterior').addEventListener('click', () => showSlide(-1));
document.querySelector('#siguiente').addEventListener('click', () => showSlide(1));
