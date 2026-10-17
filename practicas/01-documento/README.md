# Documento HTML e idioma

Capítulo de referencia: 1. Tiempo orientativo: 25 minutos. Nivel básico-intermedio.

## Tarea y barrera

Consultar una ficha de curso e identificar su idioma y su título antes de inscribirse.

**Punto de partida:** La ficha declara inglés, usa un título genérico y bloquea la ampliación en el viewport.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

El idioma principal se declara en html. Un lector de pantalla puede utilizarlo para elegir pronunciación. Una frase en otro idioma puede necesitar su propio lang. No confundas el idioma del contenido con el lenguaje de programación.

El title identifica la página en pestañas, historial y navegación. Debe reflejar el propósito de esa vista. En una aplicación dinámica también hay que actualizarlo al cambiar de ruta.

El viewport debe permitir ampliar. No restringir el zoom es una decisión de implementación que ayuda a cumplir redimensión y reflow; no sustituye probar que al ampliar no se pierde contenido. La estructura global se completará en la práctica 02.

## Relación con WCAG 2.2

- [3.1.1 Idioma de página (A)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [3.1.2 Idioma de fragmentos (AA)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
- [2.4.2 Título de página (A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [1.4.4 Redimensionar texto (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Abre inicio e identifica el valor de lang, title y viewport.
2. Cambia el idioma principal a es y marca la frase inglesa como en.
3. Escribe un título que identifique curso y portal.
4. Elimina restricciones de escala y compara con la solución.

## Comprobación y entrega

- [ ] La pestaña identifica el curso.
- [ ] El árbol de accesibilidad declara español y conserva el cambio de idioma.
- [ ] El navegador permite ampliar al 200 % sin perder texto ni controles.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- La declaración de idioma pertenece al elemento html, no al body.
- No hace falta añadir ARIA para indicar el idioma.

## Ampliación

Añade un título para el paso 2 de una inscripción y otro para una búsqueda con resultados.

## HTML obsoleto y movimiento

Evita `<marquee>` y `<blink>`: son recursos obsoletos o no estándar para presentar movimiento o parpadeo. Sustituye un anuncio móvil por texto estático que conserve el mensaje. Si el movimiento tiene una finalidad, implementa controles y respeta las preferencias; P14 lo comprueba. No generes destellos para demostrar el problema.

Microcaso de dos minutos: transforma `<marquee>Inscripción abierta</marquee>` en `<p>Inscripción abierta</p>` y explica qué información se conserva. La validez del HTML por sí sola no certifica accesibilidad.
