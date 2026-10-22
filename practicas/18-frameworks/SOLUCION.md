# Explicación de la solución

Cada biblioteca coordina sus actualizaciones con su ciclo real de renderizado. Se mantiene la semántica HTML y se distinguen navegación y anuncio de resultados.

## Comprobaciones

- Ayuda tiene título propio y su h1 recibe el foco tras la navegación.
- El filtro se llama Modalidad y Online muestra dos cursos.
- Aplicar conserva el foco y el recuento está en una región status.
- Volver a Catálogo mantiene navegación y ayuda disponibles.

Las pruebas de navegador verifican comportamiento y reglas automáticas. Los anuncios reales requieren el recorrido con lector y registro de entorno.

## Propuesta alternativa

- [Solución con React, Vue y Lit](solucion/propuesta-frameworks.html) (abrir con `npm start`; `?fw=react|vue|lit`).
- [Explicación paso a paso con WCAG 2.2](solucion/explicacion-frameworks.html).

Incluye prueba de regresión Ayuda → Catálogo → Online y filtro reflejado en la URL.
