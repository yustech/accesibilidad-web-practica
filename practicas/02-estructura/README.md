# Regiones, encabezados y orden

Capítulo de referencia: 2. Tiempo orientativo: 45 minutos. Nivel básico-intermedio.

## Tarea y barrera

Encontrar requisitos y temario sin recorrer toda la página.

**Punto de partida:** Todo parece un bloque de texto y los títulos solo cambian de tamaño visual.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

La semántica permite recorrer el documento por regiones, encabezados y listas. Una apariencia de título no crea un encabezado. Elige h1 a h6 según la jerarquía y utiliza CSS para su presentación.

header, nav, main y footer comunican la estructura cuando se usan en su contexto. En esta ficha adoptamos un h1 principal y un main como convención clara. No hace falta añadir role=main a main ni poner aria-label en cada elemento.

La secuencia del DOM debe conservar las relaciones y el sentido al leer sin presentación. Reordenar con CSS puede producir una lectura o tabulación distinta de la que ve la persona. Una auditoría revisa el efecto sobre significado y uso, no solo la numeración de los encabezados.

## Relación con WCAG 2.2

- [1.3.1 Información y relaciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.3.2 Secuencia significativa (A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [2.4.1 Saltar bloques repetidos (A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [2.4.6 Encabezados y etiquetas (AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Lista las zonas que tiene la ficha y las relaciones entre sus títulos.
2. Sustituye los contenedores genéricos por estructura semántica cuando corresponda.
3. Añade un enlace de salto al main.
4. Revisa encabezados, regiones y listas con el árbol de accesibilidad.

## Comprobación y entrega

- [ ] El enlace de salto lleva al contenido y es visible al enfocarse.
- [ ] La navegación por encabezados ofrece una jerarquía comprensible.
- [ ] La secuencia conserva su significado al quitar CSS.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Un texto en negrita no equivale a h2.
- Las listas de requisitos tienen información de agrupación que no aporta una sucesión de br.

## Ampliación

Añade una segunda navegación y decide cómo distinguir sus nombres sin duplicar información.
