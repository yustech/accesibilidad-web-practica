# Cambios de vista en aplicaciones

Capítulo de referencia: Anexo SPAs y frameworks. Tiempo orientativo: 30 minutos. Nivel básico-intermedio.

## Tarea y barrera

Abrir la vista de ayuda y reconocer el nuevo contexto sin una recarga.

**Punto de partida:** Cambia el contenido, pero el título sigue igual y el foco permanece en el enlace anterior.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

El navegador gestiona parte del contexto al cargar un documento nuevo. Al sustituir una vista con JavaScript, el equipo debe decidir cómo comunicar la navegación, actualizar title y ofrecer un punto de trabajo coherente.

Una estrategia sencilla para esta demo es actualizar título y enfocar el encabezado de la vista una vez insertado en el DOM. No se debe mover foco por cualquier actualización: un filtro y una navegación son tareas distintas.

React, Vue y Lit necesitan respetar el mismo contrato, coordinado con su ciclo de renderizado. La práctica usa JavaScript del navegador para que el concepto no dependa de conocer tres frameworks. El ejemplo es un cambio de vista didáctico, no un router de producción completo.

## Relación con WCAG 2.2

- [2.4.2 Título de página (A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [2.4.3 Orden del foco (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [3.2.3 Navegación consistente (AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [3.2.6 Ayuda consistente (A)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Cambia a Ayuda y observa título y foco.
2. Actualiza document.title según la vista.
3. Enfoca el h1 de la vista tras insertarlo usando tabindex=-1.
4. Mantén navegación y ayuda en un lugar consistente.

## Comprobación y entrega

- [ ] La vista Ayuda tiene su propio title y h1.
- [ ] Después del cambio el foco está en el encabezado nuevo.
- [ ] Los enlaces conservan href y solo se interceptan activaciones normales.
- [ ] La ayuda sigue disponible en ambas vistas.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Inserta primero el contenido y enfoca después.
- Conserva el comportamiento de abrir una pestaña con Ctrl/Cmd.

## Ampliación

Aplica el contrato con useEffect/ref en React, nextTick/ref en Vue o updateComplete en Lit, y añade historial de navegación.
