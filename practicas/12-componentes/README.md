# Componentes y Shadow DOM

Capítulo de referencia: 12. Tiempo orientativo: 30 minutos. Nivel básico-intermedio con ampliación opcional.

## Tarea y barrera

Activar un componente reutilizable que conserva su nombre y estado.

**Punto de partida:** Un botón dentro de Shadow DOM referencia un título externo mediante un ID que no resuelve en su contexto.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Shadow DOM separa el árbol interno del componente del documento que lo contiene. Las referencias por ID de atributos como aria-labelledby no deben asumirse válidas entre raíces. Empieza por una relación estable dentro del mismo contexto.

El componente usa un botón nativo interno con texto visible. Cada instancia tiene su propio estado. Encapsular estilos también exige proporcionar un foco perceptible dentro de la raíz, porque el CSS del documento no entra de la misma forma.

Es una ampliación para el nivel del curso. No se enseña una API experimental como requisito universal. Las técnicas y su soporte cambian: comprobar el componente con el navegador y la tecnología de apoyo objetivo sigue siendo necesario.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.7 Foco visible (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Inspecciona el botón interno y su nombre calculado.
2. Elimina la referencia externa rota y añade texto dentro del botón.
3. Mantén aria-pressed y el estado independiente por instancia.
4. Prueba teclado y foco dentro de la raíz.

## Comprobación y entrega

- [ ] Las dos instancias tienen nombres específicos.
- [ ] Cada botón responde a Enter y Espacio.
- [ ] Activar una instancia no altera la otra.
- [ ] El foco se ve dentro del componente.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Inspecciona el árbol de accesibilidad, no solo el HTML del host.
- No añadas aria-label al host esperando que nombre automáticamente el botón interno.

## Ampliación

Documenta propiedades, eventos y responsabilidades del consumidor, y traslada el patrón a Lit si el grupo lo utiliza.
