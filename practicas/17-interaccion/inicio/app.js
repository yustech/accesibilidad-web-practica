let value = 20;
const range = document.querySelector('#duracion');
range.addEventListener('click', () => {
  value = value >= 40 ? 5 : value + 5;
  range.setAttribute('aria-valuenow', value);
  document.querySelector('#valor').textContent = `${value} horas`;
});
let current = 0;
const slides = [...document.querySelectorAll('.slide')];
function show(offset) {
  current = (current + offset + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.hidden = index !== current;
  });
}
document.querySelector('#anterior').addEventListener('click', () => show(-1));
document.querySelector('#siguiente').addEventListener('click', () => show(1));
