// Formulario A: se deja actuar a la validación nativa; solo se confirma el envío válido.
const formNativo = document.querySelector('#form-nativo');
formNativo.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#resultado-nativo').textContent = 'Formulario A enviado.';
});

// Formulario B: Bootstrap solo aporta el aspecto (.is-invalid, .invalid-feedback).
// El autor añade texto del error, su asociación al campo, el estado y el foco.
const formBs = document.querySelector('#form-bootstrap');
const campo = document.querySelector('#correo-bs');
const error = document.querySelector('#correo-bs-error');
const resumen = document.querySelector('#resumen-errores');
const resumenTexto = document.querySelector('#resumen-texto');
const resultadoBs = document.querySelector('#resultado-bs');
const ayudaId = 'correo-bs-ayuda';

function mensaje() {
  if (campo.validity.valueMissing) return 'Error: escribe tu correo electrónico.';
  if (campo.validity.typeMismatch)
    return 'Error: escribe un correo válido, como persona@example.com.';
  return '';
}

function validar() {
  const texto = mensaje();
  campo.classList.toggle('is-invalid', Boolean(texto));
  error.textContent = texto;
  if (texto) {
    campo.setAttribute('aria-invalid', 'true');
    campo.setAttribute('aria-describedby', `${ayudaId} correo-bs-error`);
  } else {
    campo.removeAttribute('aria-invalid');
    campo.setAttribute('aria-describedby', ayudaId);
  }
  return texto;
}

formBs.addEventListener('submit', (event) => {
  event.preventDefault();
  resultadoBs.textContent = '';
  const texto = validar();
  if (texto) {
    resumenTexto.textContent = `Hay 1 error en el formulario. ${texto}`;
    resumen.hidden = false;
    resumen.focus();
    return;
  }
  resumen.hidden = true;
  resultadoBs.textContent = 'Formulario B enviado.';
});

campo.addEventListener('input', () => {
  if (campo.classList.contains('is-invalid')) {
    if (validar() === '') resumen.hidden = true;
  }
});

// Tras abrir el modal el foco inicial va al botón de cierre si el contenido no tiene campos.
document.querySelector('#modal-inscripcion').addEventListener('shown.bs.modal', () => {
  document.querySelector('#modal-inscripcion .btn-close').focus();
});
