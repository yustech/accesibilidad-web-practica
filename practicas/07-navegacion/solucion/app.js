const toggle = document.querySelector('#toggle');
const panel = document.querySelector('#enlaces');
function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
}
toggle.addEventListener('click', () => setOpen(panel.hidden));
document
  .querySelector('nav[aria-label="Secciones"]')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
