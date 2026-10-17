# Bootstrap real y responsabilidad del autor

Capítulo de referencia: Anexos Bootstrap. Tiempo orientativo: 45 minutos. Nivel básico-intermedio.

Material de consulta y ampliación posterior. Este laboratorio no ocupa un bloque obligatorio en el horario de las cuatro sesiones.

## Tarea y barrera

Abrir un modal de Bootstrap y recorrer un desplegable comprobando qué resuelve el framework.

**Punto de partida:** Los componentes visuales funcionan, pero faltan nombres y un título asociado.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

El ejercicio usa Bootstrap instalado localmente con una versión fijada. Su plugin proporciona comportamiento de foco y teclado. La responsabilidad del autor incluye estructura, nombre, contexto y una composición que conserve esa interacción.

Los dropdowns incorporan navegación con flechas entre dropdown-item y cierre con Escape. Pueden contener enlaces y no tienen que representar un menú ARIA de aplicación. Inspecciona el comportamiento antes de añadir código duplicado.

En el modal se añade un título asociado y un cierre nombrado. El plugin incorpora semántica de diálogo al abrirlo. El foco inicial puede ajustarse en shown.bs.modal cuando la tarea lo requiera. No se añade una segunda trampa de foco.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.1.2 Ausencia de trampas (A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [2.4.3 Orden del foco (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Arranca el servidor y abre el modal inicial.
2. Asocia el título y nombra el cierre.
3. Inspecciona role y aria-modal con el modal abierto.
4. Prueba flechas y Escape en el desplegable.
5. Documenta qué aporta Bootstrap y qué has añadido tú.

## Comprobación y entrega

- [ ] El modal se anuncia con el nombre Inscripción Bootstrap.
- [ ] Escape cierra y el foco vuelve al disparador.
- [ ] El desplegable permite recorrer opciones con flechas.
- [ ] No se han añadido listeners manuales que dupliquen la trampa de foco.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Revisa el DOM vivo después de abrir.
- La documentación de la versión instalada es la referencia.

## Ampliación

Añade un offcanvas con su título y comprueba su ciclo de foco, y compara la validación nativa con la validación visual del framework.
