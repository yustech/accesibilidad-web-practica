# Diálogos y ciclo del foco

Capítulo de referencia: 6. Tiempo orientativo: 65 minutos. Nivel básico-intermedio.

## Tarea y barrera

Abrir una inscripción, decidir y volver a la ficha sin perder la posición.

**Punto de partida:** Una superposición visible deja el foco detrás y no lo devuelve al cerrar.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

El foco permite operar con teclado y debe verse. El orden debe conservar significado y operabilidad; no depende de seguir una figura geométrica universal. Evita tabindex positivo para reconstruir un orden que el DOM ya puede expresar.

Un diálogo modal necesita nombre, entrada de foco, contención durante la interacción y una salida disponible. dialog.showModal() ofrece modalidad nativa. El foco inicial depende de la tarea: en una confirmación destructiva puede convenir la acción menos dañina.

Al cerrar se restituye el punto de trabajo, normalmente el disparador si sigue disponible. En WCAG 2.2 AA, un componente enfocado no puede quedar totalmente oculto por contenido creado por el autor. Apariencia del foco 2.4.13 tiene nivel AAA y no debe confundirse con foco visible o no oculto.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.1.2 Ausencia de trampas (A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [2.4.3 Orden del foco (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [2.4.7 Foco visible (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [2.4.11 Foco no totalmente oculto (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Abre la versión inicial y observa dónde queda el foco.
2. Usa dialog con un título relacionado y showModal().
3. Define una entrada segura y un botón de cierre.
4. Prueba Escape, cerrar, Tab y Shift+Tab y comprueba el retorno.

## Comprobación y entrega

- [ ] El diálogo se anuncia con su título.
- [ ] Con el modal abierto no se operan los controles del fondo.
- [ ] Escape y Cancelar cierran y devuelven el foco a Abrir inscripción.
- [ ] El foco se mantiene visible y no queda totalmente tapado.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- Asignar aria-modal no crea modalidad.
- Con un componente nativo o un framework comprueba primero su comportamiento antes de añadir una trampa propia.

## Ampliación

Añade una cabecera fija y comprueba que no oculta por completo el control enfocado al desplazarse.
