# Inscripción y recuperación de errores

Capítulo de referencia: 9. Tiempo orientativo: 90 minutos. Nivel básico-intermedio.

## Tarea y barrera

Enviar una solicitud, comprender errores y corregirla sin volver a introducir datos válidos.

**Punto de partida:** Solo hay placeholders, los errores son genéricos y no se relacionan con los campos.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

La etiqueta visible explica qué se solicita y label asocia ese texto al control. placeholder desaparece al escribir y no sustituye las instrucciones. required, tipos adecuados y autocomplete ayudan a comunicar propósito y restricciones.

Un error debe identificar el campo y explicar cómo corregirlo cuando se conoce la solución. aria-invalid comunica el estado y aria-describedby permite asociar ayuda y error sin perder las instrucciones previas. Un resumen con enlaces facilita localizar varios problemas.

La validación de ejemplo se ejecuta al enviar. Evita una sucesión de alertas en cada pulsación. Tras un envío con errores se enfoca el resumen; tras éxito se anuncia el resultado. El formulario es local y no envía datos a un servidor.

WCAG 2.2 añade requisitos sobre introducir de nuevo información ya facilitada en el mismo proceso y sobre autenticación que impone pruebas cognitivas. El laboratorio conserva datos durante la corrección y la ampliación propone un acceso que permita pegar y utilizar gestores. No afirma evaluar por completo una autenticación real.

## Relación con WCAG 2.2

- [1.3.1 Información y relaciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.3.5 Propósito de los campos (AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [3.3.1 Identificar errores (A)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [3.3.2 Etiquetas o instrucciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [3.3.3 Sugerencias para corregir (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)
- [3.3.7 Evitar reintroducción redundante (A)](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)
- [4.1.3 Mensajes de estado (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Envía vacío y registra lo que se comunica.
2. Añade label visible, ayudas, required, type=email y autocomplete.
3. Implementa errores específicos y relaciones estables entre IDs.
4. Construye un resumen con enlaces y mueve allí el foco tras un fallo.
5. Corrige y envía, manteniendo los datos válidos.

## Comprobación y entrega

- [ ] Al enviar vacío el foco va al resumen y sus enlaces llevan a cada campo.
- [ ] Cada campo anuncia etiqueta, ayuda y error cuando corresponda.
- [ ] Un segundo envío elimina errores resueltos sin borrar el resto de datos.
- [ ] Un envío correcto produce un mensaje de estado y no recarga ni transmite datos.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Conserva el ID de la ayuda al añadir el del error en aria-describedby.
- No necesitas role=alert si ya enfocas un resumen y eso provoca anuncios duplicados.

## Ampliación

Añade un segundo paso que reutilice el correo ya introducido y diseña un acceso que admita pegar la contraseña. Relaciona la decisión con 3.3.7 y 3.3.8.
