# Selector de valor y carrusel

Tiempo de clase: 30 minutos. Nivel básico-intermedio.

## Tarea y barrera

Elegir una duración máxima y recorrer cursos destacados con teclado y toque.

El selector solo responde al clic y los controles del carrusel no son botones.

Abre [inicio](inicio/index.html) desde el servidor local. Contrasta tu diagnóstico con [la solución](solucion/index.html) y su [explicación](SOLUCION.md).

## Teoría

Un slider de valor y un carrusel son patrones distintos. Para un valor numérico, input type=range aporta rol, límites y teclado nativos; label identifica su propósito. aria-valuetext expresa unidades cuando ayudan a comprender el valor.

Los botones Reducir y Aumentar permiten operar sin arrastrar. El área de toque y el recorrido se comprueban también en móvil. No se añade una región viva que duplique cada anuncio del valor.

El carrusel de referencia es manual. Sus botones conservan el foco; solo la diapositiva activa queda disponible y una región de estado comunica su posición. Un carrusel automático necesitaría además control de rotación y detenerse en las condiciones del patrón.

## Criterios WCAG

- [2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

## Paso a paso

1. Prueba el inicio con Tab y flechas antes de usar el ratón.
2. Sustituye el selector por un rango nativo con etiqueta, límites y paso.
3. Añade botones de incremento y decremento y sincroniza el valor y sus unidades.
4. Comprueba flechas, Inicio, Fin y límites sin arrastrar.
5. Compara los controles del carrusel con la solución; verifica una sola diapositiva disponible y conservación del foco.

## Comprobación y entrega

- [ ] El rango se llama Duración máxima del curso y comienza en 20 horas.
- [ ] Flecha derecha suma 5; Inicio llega a 5 y Fin a 40.
- [ ] Los botones ofrecen una alternativa al arrastre y respetan los límites.
- [ ] Curso siguiente actualiza posición y contenido sin mover el foco.
- [ ] Con una ventana estrecha se conservan controles y lectura.

Guarda código y evidencia antes/después en tu diario. Registra como pendiente lo que no hayas probado.

## Pistas

- Empieza con input type=range, no con un div de rol slider.
- hidden retira las diapositivas inactivas; no basta con volverlas transparentes.

## Ampliación

Ensaya el rango y sus botones en un dispositivo táctil; registra por separado lo probado con tecnología de apoyo móvil.

## Distribución de la clase

Dedica 20 minutos a corregir y comprobar el rango y 10 a comparar y recorrer el carrusel de referencia. Fuentes: [slider de valor](https://www.w3.org/WAI/ARIA/apg/patterns/slider/) y [carrusel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).
