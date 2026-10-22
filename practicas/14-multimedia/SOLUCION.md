# Solución comentada de audio, vídeo y movimiento

Se añaden transcripción, pausa y una consulta CSS para movimiento reducido. El archivo de audio es original y local.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- La transcripción explica que la solicitud está guardada.
- El audio tiene controles nativos y no arranca automáticamente.
- El botón permite pausar y reanudar.
- Con movimiento reducido el indicador deja de desplazarse.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.

## Vídeo reproducible

La referencia incorpora la versión de 20 segundos con descripción sonora, subtítulos españoles y transcripción descriptiva. La comparación conserva la versión base de 12 segundos para identificar qué falta en su audio. Las pistas tienen tiempos distintos porque la versión descrita deja espacio para narrar los cambios. Comprueba controles y anuncios en el navegador y lector utilizados.

## Propuesta alternativa

La [propuesta alternativa](solucion/propuesta-alternativa/index.html) añade estado anunciado en la pausa y resuelve la ampliación de clasificación de medios. El [proceso paso a paso](solucion/propuesta-alternativa/explicacion.html) la documenta con referencias a WCAG 2.2.
