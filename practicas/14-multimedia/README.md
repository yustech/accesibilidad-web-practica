# Audio, vídeo y movimiento

Capítulo de referencia: Anexo multimedia. Tiempo orientativo: 50 minutos. Nivel básico-intermedio.

## Tarea y barrera

Comprender una notificación sonora y controlar una animación sin depender de escuchar o tolerar movimiento.

**Punto de partida:** Un audio comunica el resultado sin texto equivalente y un indicador se mueve continuamente sin pausa.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Para audio pregrabado sin vídeo, 1.2.1 exige una alternativa con la información equivalente. En el ejercicio dos tonos tienen un significado indicado en la transcripción. La alternativa debe explicar qué comunican, además de describir que hay sonidos.

En vídeo sincronizado pregrabado, distingue subtítulos de información sonora, alternativa multimedia y audiodescripción. En AA, si información visual relevante no está ya en el audio, 1.2.5 requiere audiodescripción. Una transcripción sola no reemplaza ese requisito. El repositorio incluye un guion de decisión y una pista VTT como material de edición; no presenta esa pista suelta como vídeo validado.

Un movimiento automático que dura más de cinco segundos y aparece junto a otro contenido puede requerir pausa, parada u ocultación, salvo la excepción esencial. Respetar prefers-reduced-motion mejora la experiencia; no sustituye los demás requisitos. La animación del laboratorio no contiene flashes.

## Relación con WCAG 2.2

- [1.2.1 Audio o vídeo sin sincronización (A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)
- [2.2.2 Pausar, detener u ocultar (A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Escucha el audio si puedes y anota qué información se pierde sin escucharlo.
2. Añade una transcripción equivalente visible junto al reproductor.
3. Añade pausa y sincroniza el texto del botón.
4. Activa reducir movimiento y verifica una alternativa estática.

## Comprobación y entrega

- [ ] La transcripción explica que la solicitud está guardada.
- [ ] El audio tiene controles nativos y no arranca automáticamente.
- [ ] El botón permite pausar y reanudar.
- [ ] Con movimiento reducido el indicador deja de desplazarse.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Para el audio del ejercicio basta texto equivalente; no se necesita una pista de subtítulos en audio.
- No uses una animación que simule destellos para enseñar fotosensibilidad.

## Ampliación

Usa el guion multimedia para clasificar un vídeo narrado, una demo visual sin narración y un directo. Justifica 1.2.2, 1.2.3, 1.2.4 y 1.2.5.
