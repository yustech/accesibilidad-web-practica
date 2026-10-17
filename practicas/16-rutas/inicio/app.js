const views = {
  inicio: { title: 'Catálogo de cursos', text: 'Elige una formación.' },
  ayuda: {
    title: 'Ayuda para la inscripción',
    text: 'Contacta con el equipo docente si necesitas apoyo.',
  },
};
const region = document.querySelector('#vista');
function render(name, move) {
  const view = views[name] || views.inicio;
  region.replaceChildren();
  const heading = document.createElement('h2');
  heading.id = 'titulo-vista';
  heading.textContent = view.title;
  const text = document.createElement('p');
  text.textContent = view.text;
  region.append(heading, text);
}
for (const link of document.querySelectorAll('[data-vista]'))
  link.addEventListener('click', (event) => {
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    event.preventDefault();
    render(link.dataset.vista, true);
  });
render(new URLSearchParams(location.search).get('vista') || 'inicio', false);
