# Contraste, ampliación y preferencias

Capítulo de referencia: 5. Tiempo orientativo: 55 minutos. Nivel básico-intermedio.

## Tarea y barrera

Leer una ficha y reservar plaza con una ventana estrecha o texto ampliado.

**Punto de partida:** El texto tiene poco contraste, la tarjeta un ancho rígido y el estado solo se indica con color.

Abre [inicio](inicio/index.html) desde el servidor del curso. Trabaja en esa carpeta. Consulta [la explicación de la solución](SOLUCION.md) después de registrar tu diagnóstico y tus cambios. El código de referencia está en [solución](solucion/index.html).

## Teoría para resolverla

El contraste del texto normal frente al fondo debe alcanzar 4,5:1 para AA. El umbral de 3:1 se aplica a texto grande: 18 pt normal o 14 pt en negrita. Poner negrita a una etiqueta pequeña no la convierte automáticamente en texto grande.

Redimensionar texto y reflow responden a pruebas distintas. Se comprueba texto al 200 % sin pérdida de contenido y redistribución a un ancho equivalente a 320 píxeles CSS para contenido vertical, con las excepciones que correspondan. Una tabla puede requerir dos dimensiones sin que toda la página tenga que hacerlo.

El color necesita otra señal cuando transmite información. Las preferencias de movimiento y colores forzados merecen revisión. No todo consejo visual es un criterio de nivel AA: distingue requisito, técnica elegida y mejora adicional.

## Relación con WCAG 2.2

- [1.4.1 Uso del color (A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [1.4.3 Contraste del texto (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.4.4 Redimensionar texto (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [1.4.10 Redistribución (AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [1.4.11 Contraste no textual (AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [1.4.12 Espaciado del texto (AA)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

Los enlaces llevan a explicaciones de apoyo de W3C. [La guía común](../../docs/teoria-wcag.md) distingue requisitos normativos, técnicas, patrones y buenas prácticas. La presencia de un criterio aquí indica relación pedagógica; no prueba su satisfacción completa. Consulta el [mapa de cobertura](../../docs/cobertura-wcag.md).

## Trabajo del alumnado

1. Mide el contraste del texto tenue y anota colores y ratio.
2. Sustituye anchos y alturas rígidos que cortan la tarjeta.
3. Añade una etiqueta textual al estado.
4. Prueba 320 px, ampliación al 200 % y los valores de espaciado de texto.

## Comprobación y entrega

- [ ] El texto normal alcanza al menos 4,5:1.
- [ ] No hay desplazamiento horizontal de la página a 320 px.
- [ ] Con interlineado 1,5, espacio entre párrafos 2 veces la fuente, letras 0,12 y palabras 0,16 em no se pierde contenido.

Entrega el código modificado y una [incidencia documentada](../../plantillas/incidencia.md), con prueba anterior y posterior. Para el lector de pantalla registra sistema, navegador y versión; un test de navegador no confirma lo que anuncia NVDA o VoiceOver.

## Pistas

- max-width y un ancho flexible ayudan a conservar el contenido.
- No fijes una altura para que el componente parezca uniforme.

## Ampliación

Activa colores forzados y comprueba qué ocurre con iconos, contornos y estados.
