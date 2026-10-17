# Tablas y ordenación

Capítulo de referencia: 11. Tiempo orientativo: 35 minutos. Nivel básico-intermedio.

## Tarea y barrera

Comparar plazas y ordenar cursos por disponibilidad.

**Punto de partida:** Las celdas de encabezado son td y ordenar depende de pulsar sobre texto sin botón.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Las tablas expresan relaciones de filas y columnas. caption identifica los datos y th con scope ayuda a expresar los encabezados sencillos. Una tabla de datos no se sustituye automáticamente por tarjetas para mejorar accesibilidad.

Una acción de ordenar pertenece a un botón dentro del encabezado. aria-sort informa del estado en la celda de encabezado correspondiente. La actualización debe coincidir con el orden real y conservar la relación entre cada curso y sus plazas.

Las tablas complejas pueden requerir asociaciones explícitas y revisión adicional. El ejemplo mantiene dos columnas para centrarse en el contrato. Si necesita desplazamiento horizontal, puede aislarse en un contenedor sin obligar al resto del documento a desplazarse en dos direcciones.

## Relación con WCAG 2.2

- [1.3.1 Información y relaciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [4.1.3 Mensajes de estado (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Revisa qué encabezado corresponde a cada dato.
2. Añade caption, th y scope.
3. Usa button para ordenar por plazas y actualiza aria-sort.
4. Ordena dos veces y verifica los datos y el foco.

## Comprobación y entrega

- [ ] El lector puede asociar nombre de curso y plazas.
- [ ] La primera ordenación es ascendente y la segunda descendente.
- [ ] El botón mantiene el foco y el estado coincide con el orden visible.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- aria-sort pertenece al th, no al button.
- El nombre del curso puede ser un encabezado de fila.

## Ampliación

Añade una tercera columna y documenta qué cambiaría si hubiera encabezados agrupados.
