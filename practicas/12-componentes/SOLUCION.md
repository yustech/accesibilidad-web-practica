# Solución comentada de componentes y shadow dom

El nombre y el control residen en la misma raíz. Cada componente gestiona su propio botón nativo y sus estilos de foco.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- Las dos instancias tienen nombres específicos.
- Cada botón responde a Enter y Espacio.
- Activar una instancia no altera la otra.
- El foco se ve dentro del componente.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.

La [propuesta Lit](solucion/propuesta-lit.html) ofrece una variante ejecutable que conserva el patrón accesible y documenta las propiedades, el evento y las responsabilidades del consumidor.
