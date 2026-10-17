# Decisiones sobre multimedia

## Elegir la alternativa según el medio

| Caso                                             | Criterios a estudiar | Decisión que debe justificarse                                                                                                                                |
| ------------------------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio pregrabado sin imagen                      | 1.2.1 A              | Alternativa textual equivalente, incluidos sonidos relevantes.                                                                                                |
| Vídeo sin audio                                  | 1.2.1 A              | Alternativa equivalente o pista de audio que comunique su información.                                                                                        |
| Vídeo sincronizado pregrabado                    | 1.2.2 A              | Subtítulos para la información sonora, con las condiciones del criterio.                                                                                      |
| Información visual relevante en vídeo pregrabado | 1.2.3 A y 1.2.5 AA   | En A estudiar alternativa o descripción. En AA, audiodescripción si esa información no está ya en el audio. Una transcripción por sí sola no sustituye 1.2.5. |
| Audio sincronizado en directo                    | 1.2.4 AA             | Subtitulado en directo según las condiciones aplicables.                                                                                                      |

Las excepciones y la equivalencia requieren revisar el medio real. No se añade un track vacío para dar por satisfecho un criterio. [Guía de W3C para audio y vídeo](https://www.w3.org/WAI/media/av/).

## Comparación con dos vídeos originales

Abre [el reproductor de comparación](../multimedia/index.html) desde el servidor. La versión base dura 12 segundos: una voz sintética española indica escribir el correo; a los 4 segundos aparece un error sin narrar y a los 8, Solicitud guardada y dos tonos. La versión descrita dura 20 segundos y añade voz para el error y la confirmación, dejando tiempo para comprenderlos. No se reproduce automáticamente.

1. Reproduce la versión base y compara la información sonora con la visual. El error no está en el audio.
2. Activa los subtítulos: verifica narración y tonos. Explica por qué subtitular esos sonidos no describe el error visual.
3. Reproduce la versión descrita con subtítulos. Comprueba que el audio comunica error y éxito y que los tiempos corresponden a sus estados.
4. Lee la transcripción descriptiva y compara con el vídeo. Distingue su función de la pista de subtítulos y de la descripción sonora sincronizada.
5. Prueba reproducción, pausa, volumen y subtítulos con teclado y registra navegador. La compatibilidad con controles y lector requiere prueba real del entorno.

Las pistas VTT están en assets/video. El guion de ejemplo.es.vtt se conserva como ejercicio inicial independiente; no es la pista usada por estos clips. La narración es sintética y los datos son ficticios. Las imágenes, el guion y los tonos son originales del curso.

## Movimiento

Revisa duración, inicio automático, presencia junto a otro contenido y posibilidades de pausa. La preferencia de reducir movimiento debe conservar el significado. No generes destellos para demostrar el riesgo. [Pausa, parada u ocultación](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) y [animación por interacción, AAA](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).
