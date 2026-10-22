# Solución comentada de bootstrap real y responsabilidad del autor

La solución completa los nombres y relaciones que necesita el caso de uso y utiliza la interacción del plugin instalado.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- El modal se anuncia con el nombre Inscripción Bootstrap.
- Escape cierra y el foco vuelve al disparador.
- El desplegable permite recorrer opciones con flechas.
- No se han añadido listeners manuales que dupliquen la trampa de foco.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.

## Propuesta alternativa

La [propuesta alternativa](solucion/propuesta-bootstrap.html) añade un offcanvas con título y ciclo de foco, compara la validación nativa con la visual de Bootstrap y completa los mensajes de error accesibles. El [proceso paso a paso](solucion/explicacion-propuesta.html) lo explica con referencias a WCAG 2.2.
