# Incidencia de accesibilidad: formulario de inscripción

- **Identificador y título:** P09-01 · Formulario sin etiquetas ni recuperación de errores.
- **Tarea afectada:** enviar una solicitud, comprender los errores y corregirla.
- **Archivo y estado:** [inicio/index.html](index.html) y [app.js](app.js) (antes). Propuesta: [propuesta.html](propuesta.html) y [propuesta.js](propuesta.js) (después).
- **Sistema, navegador, lector y versiones:** Chromium con Playwright y axe-core del repositorio. Lector de pantalla: **no evaluado** (pendiente de prueba manual con NVDA, JAWS o VoiceOver).
- **Pasos para reproducir:** abrir `inicio/index.html`, pulsar «Enviar solicitud» con los campos vacíos y con datos válidos.
- **Resultado actual:** aparece «Datos incorrectos» sin indicar campo ni causa. El foco se queda en el botón. Los campos no tienen etiqueta visible ni asociada.
- **Resultado esperado:** campos con etiqueta y ayuda, errores específicos asociados a su campo, resumen con enlaces y foco, datos conservados y mensaje de estado en el éxito.
- **Impacto:** quien usa lector de pantalla, magnificación, voz o tiene dificultades de memoria o cognitivas no puede saber qué escribir ni qué corregir. Con el error genérico no puede completar la tarea.
- **Severidad:** grave (impide completar la tarea sin ayuda externa).
- **Resultado:** corregido en la propuesta; lector de pantalla pendiente.

## Qué hice, paso a paso

**Paso 1. Leí el código y lo ejecuté.** Revisé `index.html` y `app.js`, y envié el formulario vacío con Playwright. Resultado: error `Datos incorrectos`, sin `role`, 0 campos con `aria-invalid`, 0 con `aria-describedby`, 0 etiquetas asociadas y el foco en el botón.

**Paso 2. Pasé axe sobre el inicio.** Devuelve **0 violaciones**. Es una advertencia importante: axe da por buena la «etiqueta» porque el `placeholder` cuenta como nombre accesible. Las barreras de este ejercicio solo aparecen con revisión manual y no se detectan con una herramienta automática.

**Paso 3. Catalogué los errores y los relacioné con WCAG 2.2.**

| # | Error en el inicio | Corrección en la propuesta | Criterio WCAG 2.2 |
|---|---|---|---|
| 1 | Los campos solo tienen `placeholder`: desaparece al escribir y no es una etiqueta | `<label for>` visible con «(obligatorio)» | 1.3.1 A, 3.3.2 A, 4.1.2 A, 2.5.3 A |
| 2 | Sin `autocomplete` | `autocomplete="name"` y `"email"` | 1.3.5 AA |
| 3 | El correo es un `input` de texto sin `type` ni obligatoriedad | `type="email"`, `required`, `name` | 3.3.2 A, 4.1.2 A |
| 4 | Sin ayuda sobre qué escribir ni el formato | `<p id="…-ayuda">` enlazado con `aria-describedby` | 3.3.2 A |
| 5 | Dos campos pegados en el marcado, sin contenedor | Un `div.field` por campo con etiqueta, ayuda y error | 1.3.1 A, 1.3.2 A |
| 6 | Error genérico «Datos incorrectos» | Mensajes específicos: «Escribe tu nombre completo.», «Introduce un correo con formato persona@example.com.» | 3.3.1 A, 3.3.3 AA |
| 7 | El error no está asociado a ningún campo | `aria-invalid="true"` y `aria-describedby="…-ayuda …-error"` (se conserva la ayuda) | 1.3.1 A, 3.3.1 A, 4.1.2 A |
| 8 | El mensaje no se anuncia ni mueve el foco | Resumen `section tabindex="-1"` que recibe el foco tras un fallo | 3.3.1 A, 4.1.3 AA |
| 9 | Sin resumen con enlaces a los campos | Lista de enlaces que enfocan cada campo | 3.3.1 A, 2.4.3 A |
| 10 | Sin mensaje de resultado en el éxito | `<p role="status">` con «Solicitud guardada…» | 4.1.3 AA |
| 11 | Sin garantía de conservar los datos al corregir | El script no limpia valores y solo actualiza los errores | 3.3.7 A |
| 12 | Sin texto introductorio (obligatorios, datos no enviados) | Párrafo antes del formulario | 3.3.2 A |
| 13 | Botón sin `type` | `type="submit"` explícito | 4.1.2 A (buena práctica) |

**Paso 4. Escribí la propuesta** reutilizando el patrón de la solución de referencia del curso. No toqué el inicio original ni la solución. El error no usa `role="alert"` porque se enfoca un resumen; usar ambos duplicaría el anuncio.

**Paso 5. Verifiqué con Playwright.**

| Comprobación | Antes | Después |
|---|---|---|
| Etiqueta asociada a cada campo | 0 | 2 |
| Envío vacío | Foco en el botón, error genérico | Foco en el resumen con 2 enlaces |
| `aria-invalid` / `aria-describedby` | 0 / 0 | 2 / 2 (ayuda + error) |
| Clic en un enlace del resumen | no existe | foco en el campo |
| Corregir solo el correo | sin guía | un solo error; el nombre se conserva |
| Envío correcto | sin mensaje | `role="status"`, sin recarga ni envío de datos |
| Reflow a 320 px | n/a | sin scroll horizontal |
| axe (WCAG A/AA 2.2) | 0 | 0 |

## Límites de esta evaluación

- Que axe dé 0 en ambos casos **no** significa que el inicio sea accesible; refleja la limitación de la herramienta.
- No se ha probado con lector de pantalla: no se puede afirmar qué anuncian NVDA, JAWS o VoiceOver.
- 3.3.8 (autenticación accesible) no aplica: no hay inicio de sesión.
- Esto no es una declaración de conformidad.

**Responsable y fecha de revisión:** pendiente de asignar.
