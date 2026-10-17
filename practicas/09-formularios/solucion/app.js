const form = document.querySelector('#inscripcion');
const summary = document.querySelector('#resumen');
const list = document.querySelector('#lista-errores');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.replaceChildren();
  document.querySelector('#exito').textContent = '';
  const issues = [];
  for (const id of ['nombre', 'email']) {
    const input = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    let message = '';
    if (!input.value.trim())
      message =
        id === 'nombre'
          ? 'Escribe tu nombre completo.'
          : 'Escribe tu correo electrónico.';
    else if (id === 'email' && input.validity.typeMismatch)
      message = 'Introduce un correo con formato persona@example.com.';
    error.textContent = message;
    error.hidden = !message;
    input.setAttribute('aria-describedby', `${id}-ayuda${message ? ` ${id}-error` : ''}`);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      issues.push({ id, message });
    } else input.removeAttribute('aria-invalid');
  }
  summary.hidden = issues.length === 0;
  for (const { id, message } of issues) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = message;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(id).focus();
    });
    li.append(link);
    list.append(li);
  }
  if (issues.length) summary.focus();
  else
    document.querySelector('#exito').textContent =
      'Solicitud guardada en la demostración. No se han enviado datos.';
});
