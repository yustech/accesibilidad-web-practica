# Solución comentada de navegación desplegable

Un botón controla hidden y aria-expanded. El panel contiene una lista de enlaces; aria-current identifica el inicio y Escape vuelve al botón.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- Enter y Espacio abren y cierran.
- El contenido oculto no recibe Tab.
- Escape cierra y devuelve el foco al disparador.
- La ayuda mantiene su ubicación relativa en las vistas del ejercicio.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.
