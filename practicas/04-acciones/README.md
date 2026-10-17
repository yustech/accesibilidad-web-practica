# Botones, nombre y estado

Capítulo de referencia: 4. Tiempo orientativo: 35 minutos. Nivel básico-intermedio.

## Tarea y barrera

Guardar un curso como favorito con teclado.

**Punto de partida:** La acción se implementa con un div que solo responde al clic y no comunica su estado.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Un botón ejecuta una acción. button aporta foco, rol y activación con Enter y Espacio. Dentro de formularios, type=button evita un envío accidental cuando no es esa su función.

El nombre explica la acción. Si el control alterna un estado, aria-pressed puede comunicar si está activado. Mantén una etiqueta estable y actualiza el estado real junto a una indicación visible.

ARIA aporta semántica y no implementa interacción. role=button en un div no crea automáticamente teclado. Si un botón está temporalmente inactivo, hay que decidir cómo comunicar el motivo. aria-disabled por sí solo no impide su ejecución.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.5.3 Texto visible en el nombre (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Intenta guardar usando Tab, Enter y Espacio.
2. Sustituye el div por button con type explícito.
3. Relaciona aria-pressed con el estado de favorito.
4. Verifica que cada activación cambia exactamente una vez el estado.

## Comprobación y entrega

- [ ] El control recibe foco y responde a Enter y Espacio.
- [ ] aria-pressed alterna entre true y false.
- [ ] El estado también aparece escrito en pantalla.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Un listener de click en un botón nativo ya recibe activación de teclado.
- Añadir un listener extra de keydown puede duplicar acciones.

## Ampliación

Añade una operación de guardado simulada y evita envíos duplicados sin ocultar el motivo al usuario.
