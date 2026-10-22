# Solución comentada de cambios de vista en aplicaciones

Tras el cambio de vista se actualizan título y encabezado y se mueve foco al h1. Se conserva el comportamiento nativo para activaciones modificadas.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- La vista Ayuda tiene su propio title y h1.
- Después del cambio el foco está en el encabezado nuevo.
- Los enlaces conservan href y solo se interceptan activaciones normales.
- La ayuda sigue disponible en ambas vistas.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.

## Propuesta alternativa

- [Solución con React, Vue y Lit](solucion/propuesta-rutas.html) (abrir con `npm start`; cambia de framework con `?fw=react|vue|lit`).
- [Explicación paso a paso con WCAG 2.2](solucion/explicacion-rutas.html).

Incluye el contrato con useEffect/ref, nextTick/ref y updateComplete, historial de navegación con pushState/popstate y una vista no encontrada.
