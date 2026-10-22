const form = document.querySelector('#inscripcion');
const summary = document.querySelector('#resumen');
const list = document.querySelector('#lista-errores');
const success = document.querySelector('#exito');

const messages = {
  nombre: { empty: 'Escribe tu nombre completo.' },
  email: {
    empty: 'Escribe tu correo electrónico.',
    format: 'Introduce un correo con formato persona@example.com.',
  },
};

function validate(id) {
  const input = document.getElementById(id);
  if (!input.value.trim()) return messages[id].empty;
  if (id === 'email' && input.validity.typeMismatch) return messages.email.format;
  return '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.replaceChildren();
  success.textContent = '';
  const issues = [];
  for (const id of Object.keys(messages)) {
    const input = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    const message = validate(id);
    error.textContent = message;
    error.hidden = !message;
    // Se conserva la ayuda y se añade el error, sin sustituirla.
    input.setAttribute('aria-describedby', `${id}-ayuda${message ? ` ${id}-error` : ''}`);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      issues.push({ id, message });
    } else {
      input.removeAttribute('aria-invalid');
    }
  }
  summary.hidden = issues.length === 0;
  for (const { id, message } of issues) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = message;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(id).focus();
    });
    li.append(link);
    list.append(li);
  }
  if (issues.length) summary.focus();
  else success.textContent = 'Solicitud guardada en la demostración. No se han enviado datos.';
});
