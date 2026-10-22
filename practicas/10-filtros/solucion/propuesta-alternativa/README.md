# Propuesta alternativa: filtros con estado vacío

Esta implementación es una propuesta distinta de [la solución de referencia](../index.html), no un reemplazo. Mantiene la aplicación explícita de filtros y el anuncio del recuento, pero incorpora el filtro de nivel para que el estado con cero coincidencias sea alcanzable y comprobable. La ampliación elegida es el estado vacío con una acción para restablecer los filtros; no implementa paginación.

Abre [la página de la propuesta](index.html) desde el servidor local del curso. Por ejemplo, ejecuta `npm start` desde la raíz del repositorio y visita `http://localhost:4173/practicas/10-filtros/solucion/propuesta-alternativa/` si el servidor informa de ese puerto.

## Proceso de solución, paso a paso

1. **Se conserva el envío explícito.** Los dos selectores están dentro del mismo formulario y solo cambian los cursos cuando la persona activa «Aplicar filtros» o envía el formulario con el teclado. No se filtra al cambiar un selector, por lo que la selección no provoca por sí sola un cambio de contexto.
2. **Se etiquetan y agrupan los controles.** Cada `select` tiene un `label` visible enlazado mediante `for` e `id`. `fieldset` y `legend` expresan que ambos controles forman el conjunto de filtros del catálogo.
3. **Se filtra por intersección.** Un curso se muestra si coincide tanto con la modalidad seleccionada como con el nivel elegido. La combinación «Aula» + «Avanzado» no tiene coincidencias; con ella se puede verificar la ampliación sin introducir cursos ficticios adicionales ni modificar el catálogo al aplicar los filtros.
4. **Se mantiene el resultado en su lugar.** Los cursos que no coinciden reciben la propiedad nativa `hidden`. La lista no se reemplaza y no se enfoca, así que el foco permanece en «Aplicar filtros» después del envío.
5. **Se comunica el recuento en una región de estado preexistente.** `#recuento` tiene `role="status"` desde la carga inicial. El script actualiza su texto al aplicar filtros; el rol proporciona el anuncio no urgente y no se mueve el foco para comunicarlo.
6. **Se explica el estado vacío y se ofrece recuperación.** Cuando el recuento es cero se muestra un encabezado, una explicación y «Restablecer filtros». Al activarlo, se seleccionan los valores «todos», se vuelve a calcular la lista y se lleva el foco al primer selector, que sigue disponible cuando se oculta el panel. Así no queda el foco dentro de un elemento que acaba de ocultarse.
7. **Se mantiene un lenguaje claro en los recuentos.** El texto distingue entre «1 curso disponible» y el plural, incluido «0 cursos disponibles». El estado vacío añade una explicación accionable, en vez de depender exclusivamente del número.

## Relación con WCAG 2.2

- **3.2.2 Cambios al introducir datos (A):** el filtrado no se ejecuta al cambiar el valor de un selector. La persona confirma la selección mediante el botón o el envío del formulario. Esto evita que un cambio de entrada cause inesperadamente una actualización del contenido o un cambio de contexto.
- **3.3.2 Etiquetas o instrucciones (A):** las etiquetas visibles «Modalidad» y «Nivel» identifican los controles; la leyenda identifica el grupo. No se usa `placeholder` como sustituto de etiquetas.
- **4.1.3 Mensajes de estado (AA):** el número de resultados se actualiza en un elemento con `role="status"` sin exigir que reciba el foco. Es un anuncio no urgente; el listado completo no se marca como región viva.
- **1.3.1 Información y relaciones (A):** las etiquetas están asociadas programáticamente a sus controles y `fieldset`/`legend` agrupa los filtros relacionados, además de la estructura de encabezados para el estado vacío.

Referencias W3C: [3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html), [3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html), [4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) y [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Son criterios relacionados con estas decisiones; su mención no equivale a una declaración de conformidad de toda la página.

## Verificación

- Al cargar, aparecen tres cursos y los controles tienen nombres accesibles.
- «Online» + «Todos los niveles» y aplicar muestra dos cursos, anuncia el recuento y conserva el foco en «Aplicar filtros».
- «Aula» + «Avanzado» y aplicar oculta los tres cursos, muestra la explicación y el botón de restablecimiento, y actualiza el recuento a cero.
- Activar «Restablecer filtros» restaura los tres cursos y los valores «Todos»; el foco vuelve a «Modalidad», no a un control que haya quedado oculto.
- Estas comprobaciones automatizadas no sustituyen la evaluación visual ni la prueba con lector de pantalla. Para validar el anuncio real, registra lector de pantalla, sistema operativo, navegador y versiones en la plantilla de pruebas del curso.
