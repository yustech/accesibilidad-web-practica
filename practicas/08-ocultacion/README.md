# Contenido oculto y ayudas

Capítulo de referencia: 8. Tiempo orientativo: 35 minutos. Nivel básico-intermedio.

## Tarea y barrera

Mostrar una ayuda que se pueda leer y operar con teclado.

**Punto de partida:** El panel cerrado es transparente, pero su enlace sigue en la tabulación.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Ocultar visualmente, retirar del árbol de accesibilidad y quitar de la interacción son decisiones distintas. opacity:0 no elimina foco ni semántica. aria-hidden retira información del árbol, pero no evita por sí mismo que un enlace reciba foco.

hidden o display:none sirven cuando el contenido no debe estar disponible en ese estado. Una clase de ocultación visual se reserva para texto que sí debe llegar al lector. No la uses para ocultar un panel interactivo cerrado.

details y summary permiten una divulgación nativa. En esta práctica se compara una implementación defectuosa con ese patrón. No se añade aria-expanded a summary porque el estado ya lo ofrece el navegador.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.3 Orden del foco (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Recorre con Tab el panel cerrado y localiza el foco invisible.
2. Explica por qué opacity y aria-hidden no resuelven esa interacción.
3. Sustituye la estructura por details y summary.
4. Comprueba apertura, lectura y tabulación en ambos estados.

## Comprobación y entrega

- [ ] El enlace del panel cerrado no entra en Tab.
- [ ] Enter y Espacio activan el resumen.
- [ ] El contenido abierto puede leerse y su enlace funciona.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Decide primero quién debe poder acceder al contenido en cada estado.
- Mantén el nombre visible del disparador.

## Ampliación

Implementa un disclosure personalizado con button, aria-expanded y hidden y compara su complejidad.
