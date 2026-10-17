# Navegación desplegable

Capítulo de referencia: 7. Tiempo orientativo: 45 minutos. Nivel básico-intermedio.

## Tarea y barrera

Abrir las secciones del portal, visitar ayuda y reconocer la página actual.

**Punto de partida:** Una navegación solo se abre al pasar el puntero y usa role=menu sin su interacción.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

Una navegación de sitio suele ser una lista de enlaces dentro de nav. Un menú de aplicación ARIA tiene otras expectativas de interacción. Elegir role=menu obliga a implementar ese patrón; no mejora por sí solo una lista de enlaces.

Un disclosure para navegación puede usar un botón nativo que expone aria-expanded y un contenedor que se oculta. El estado programático debe coincidir con lo que se ve. Escape permite cerrar de forma cómoda y debe mantener un punto de foco coherente.

aria-current=page comunica qué enlace representa la página actual. La indicación visual también debe resultar distinguible sin depender solo del color. Mantener ayuda en un lugar consistente responde a una de las incorporaciones de WCAG 2.2.

## Relación con WCAG 2.2

- [2.1.1 Teclado (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.4.1 Uso del color (A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [3.2.3 Navegación consistente (AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [3.2.6 Ayuda consistente (A)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)
- [4.1.2 Nombre, función y valor (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Abre las secciones sin usar el ratón.
2. Implementa un botón con aria-expanded y aria-controls.
3. Usa enlaces normales y elimina los roles de aplicación innecesarios.
4. Marca la página actual y permite cerrar con Escape.

## Comprobación y entrega

- [ ] Enter y Espacio abren y cierran.
- [ ] El contenido oculto no recibe Tab.
- [ ] Escape cierra y devuelve el foco al disparador.
- [ ] La ayuda mantiene su ubicación relativa en las vistas del ejercicio.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- La navegación de enlaces sigue pudiendo recorrerse con Tab.
- No hace falta añadir navegación con flechas a este disclosure sencillo.

## Ampliación

Adapta el panel a dos anchuras y comprueba el estado al cambiar de tamaño con el panel abierto.
