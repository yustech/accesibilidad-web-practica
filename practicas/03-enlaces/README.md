# Enlaces y alternativas de imágenes

Capítulo de referencia: 3. Tiempo orientativo: 30 minutos. Nivel básico-intermedio.

## Tarea y barrera

Elegir entre dos cursos y saber qué ficha se va a abrir.

**Punto de partida:** Dos enlaces dicen Ver más y una imagen usada como enlace carece de alternativa.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Un enlace cambia de ubicación. href proporciona destino y comportamiento nativo, incluido abrir en otra pestaña desde el navegador. Un div con un evento de clic no ofrece ese contrato.

El propósito debe poder determinarse a partir del enlace o de un contexto asociado programáticamente en 2.4.4. Hacerlo comprensible por sí solo facilita listas de enlaces, pero esa exigencia aislada corresponde a un criterio AAA distinto. En el laboratorio elegimos textos explícitos por claridad.

Una imagen funcional necesita una alternativa que explique el destino o acción. Una imagen decorativa usa alt vacío. Si la imagen y el texto repiten exactamente el mismo enlace, evita anuncios duplicados. El nombre accesible debe conservar el texto visible cuando exista.

## Relación con WCAG 2.2

- [1.1.1 Alternativas al contenido no textual (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [2.4.4 Propósito del enlace en contexto (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [2.5.3 Texto visible en el nombre (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Recorre los enlaces y anota qué destino esperas de cada uno.
2. Reemplaza los textos genéricos por destinos concretos.
3. Decide qué aporta la imagen en su contexto y escribe la alternativa necesaria.
4. Comprueba teclado, nombre y destino real.

## Comprobación y entrega

- [ ] Todos los destinos existen dentro de la práctica.
- [ ] El enlace de imagen se anuncia con un propósito comprensible.
- [ ] Los enlaces se distinguen por algo más que su color.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- No uses aria-label para ocultar un texto visible incorrecto que puedes mejorar.
- El alt de una imagen enlazada explica su función.

## Ampliación

Añade una descarga e informa del formato y tamaño como mejora de usabilidad. Debate si abrir otra pestaña ayuda a la tarea.
