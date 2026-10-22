# Solución comentada de contenido oculto y ayudas

details conserva el comportamiento nativo. El navegador retira el contenido cerrado de la interacción y comunica el estado.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- El enlace del panel cerrado no entra en Tab.
- Enter y Espacio activan el resumen.
- El contenido abierto puede leerse y su enlace funciona.

## Ampliación: disclosure personalizado

[disclosure-personalizado.html](solucion/disclosure-personalizado.html) y [disclosure.js](solucion/disclosure.js) resuelven lo mismo con `button`, `aria-expanded`, `aria-controls` y `hidden`.

| Aspecto | `details`/`summary` | `button` + `aria-expanded` + `hidden` |
| --- | --- | --- |
| Código | 5 líneas de HTML, sin JavaScript. | HTML con 3 atributos ARIA/`hidden` más 7 líneas de JavaScript. |
| Teclado | Enter y Espacio nativos en `summary`. | Nativos por ser `button`. |
| Estado expuesto | Lo gestiona el navegador. | Hay que mantener `aria-expanded` sincronizado a mano. |
| Contenido cerrado | El navegador lo excluye de Tab y del árbol de accesibilidad. | `hidden` (`display: none`) lo excluye; si se sustituye por una clase de opacidad reaparece la barrera inicial. |
| Control del diseño | Marcador y animación limitados. | Control total: iconos, animación, agrupación tipo acordeón. |
| Riesgos | Pocos. | Estado desincronizado, olvidar `hidden` o `aria-expanded`, regresiones al personalizar. |

Prefiere `details`/`summary` salvo que necesites un comportamiento que no ofrezca. Esta variante no sustituye a la referencia del ejercicio.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.
