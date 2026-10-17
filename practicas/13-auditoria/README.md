# Auditoría y criterios de aceptación

Capítulo de referencia: 13. Tiempo orientativo: 65 minutos. Nivel básico-intermedio.

## Tarea y barrera

Encontrar barreras, documentar impacto y demostrar que una corrección permite completar una tarea.

**Punto de partida:** Una puntuación automática favorable puede ocultar un enlace ambiguo, instrucciones confusas o errores de interacción.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Las herramientas detectan clases de problemas, no toda la experiencia. Un resultado sin violaciones no demuestra conformidad. Hay que definir alcance, estados y tareas, probar teclado y utilizar tecnología de apoyo.

Una incidencia útil incluye pasos reproducibles, resultado actual, resultado esperado, impacto, evidencia y criterio aplicable. La severidad se decide por el efecto sobre la tarea y el alcance, no por si el criterio es A o AA.

La corrección se verifica repitiendo las mismas condiciones. La prevención lleva la prueba al proceso del equipo: criterios de aceptación, revisión y regresión. Esta práctica produce una evaluación didáctica de alcance limitado, no una auditoría completa de una organización.

## Relación con WCAG 2.2

- [1.1.1 Alternativas al contenido no textual (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.4 Propósito del enlace en contexto (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [3.3.2 Etiquetas o instrucciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Define la tarea y recorre la página sin ratón antes de ejecutar herramientas.
2. Registra tres incidencias usando la plantilla.
3. Ejecuta axe y separa lo confirmado de lo que requiere juicio.
4. Corrige al menos dos barreras y vuelve a ejecutar la tarea.
5. Escribe dos criterios de aceptación que prevengan regresiones.

## Comprobación y entrega

- [ ] El informe permite reproducir cada hallazgo.
- [ ] Cada asociación WCAG se justifica con condiciones concretas.
- [ ] Se registran pruebas manuales aunque axe no encuentre fallos.
- [ ] La revisión distingue fallo, mejora y resultado no evaluado.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Un alt presente puede seguir siendo inadecuado.
- No copies una severidad automática sin explicar el impacto.

## Ampliación

Aplícalo al reto final, asigna responsable y prioridad, y redacta un plan de revisión para el equipo.

## Comparación de las cuatro herramientas

Sigue [axe, WAVE, Lighthouse y TAW paso a paso](../../docs/herramientas-evaluacion.md). Usa la demo compartida para comparar resultados y vuelve después a esta práctica para corregir y redactar incidencias. Completa el registro de herramientas; no marques como ejecutada una herramienta que solo has leído.
