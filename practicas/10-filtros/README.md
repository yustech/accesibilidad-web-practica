# Filtros y anuncios de resultados

Capítulo de referencia: 10. Tiempo orientativo: 40 minutos. Nivel básico-intermedio.

## Tarea y barrera

Mostrar cursos online y saber cuántos resultados quedan.

**Punto de partida:** La lista cambia sin aviso y el selector no tiene etiqueta.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Un filtro explícito por lotes permite elegir y después aplicar. Una selección que solo cambia resultados no debe provocar una navegación inesperada. Explica cuándo se ejecuta y mantén la coherencia entre filtro activo y resultados.

Una región de estado ya presente en el DOM puede comunicar la cantidad de resultados sin mover el foco. role=status proporciona un anuncio no urgente. No conviertas todo el listado en una región viva: puede repetir demasiado contenido.

La persona debe seguir trabajando con el filtro después de aplicarlo. Un estado vacío también necesita una explicación y una manera de recuperar resultados. El patrón se puede aplicar a paginación y ordenación.

## Relación con WCAG 2.2

- [3.2.2 Cambios al introducir datos (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)
- [3.3.2 Etiquetas o instrucciones (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [4.1.3 Mensajes de estado (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Aplica el filtro inicial y observa qué información falta.
2. Etiqueta el selector y usa un formulario con envío local.
3. Actualiza una región status con el recuento.
4. Comprueba que el foco permanece en Aplicar y que Todos recupera los resultados.

## Comprobación y entrega

- [ ] Online muestra dos cursos y Todos muestra tres.
- [ ] La lista está agrupada y el recuento cambia en un status.
- [ ] Aplicar conserva el foco y no recarga la página.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- La región de estado debe existir antes del cambio.
- No hace falta enfocar el listado para comunicar un recuento.

## Ampliación

Añade paginación con aria-current=page o un estado sin resultados con botón para restablecer filtros.

## aria live y regiones de estado

`aria-live="polite"` solicita anunciar una actualización cuando resulte oportuno; `assertive` expresa urgencia y puede interrumpir, por lo que se reserva para casos justificados. `role="status"` ya tiene aria-live polite implícito y es adecuado para el recuento no urgente de esta práctica. No necesitas duplicar el atributo.

Mantén la región en el DOM antes de actualizar su texto. No muevas el foco al recuento y no conviertas todo el catálogo en una región viva. Prueba el anuncio real con el lector y registra el entorno. [Definición de status](https://www.w3.org/TR/wai-aria-1.2/#status).
