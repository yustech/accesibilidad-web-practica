# Solución comentada de botones, nombre y estado

La solución usa button y un listener click. Cambia aria-pressed y el texto de estado. La semántica nativa resuelve la activación.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- El control recibe foco y responde a Enter y Espacio.
- aria-pressed alterna entre true y false.
- El estado también aparece escrito en pantalla.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.
