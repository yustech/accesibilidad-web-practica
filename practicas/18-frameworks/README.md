# React, Vue y Lit con DOM dinámico

Tiempo de clase: 45 minutos. Nivel básico-intermedio.

## Tarea y barrera

Cambiar de vista y filtrar cursos manteniendo contexto y anuncios en tres implementaciones reales.

La vista cambia sin actualizar título ni foco y el filtro no tiene etiqueta ni región de estado.

Abre [inicio](inicio/index.html) desde el servidor local. Contrasta tu diagnóstico con [la solución](solucion/index.html) y su [explicación](SOLUCION.md).

## Teoría

React confirma el renderizado antes del efecto dependiente de la vista; una ref identifica el encabezado. Vue ofrece nextTick para esperar su actualización y LitElement ofrece updateComplete. Las tres demos utilizan las bibliotecas reales, empaquetadas localmente.

Una navegación cambia el contexto: actualiza el título y decide el punto de foco después de insertar la vista. Un filtro conserva el foco en Aplicar y comunica el recuento mediante role=status. Ese rol tiene aria-live=polite implícito.

La comparación introduce accesibilidad en frameworks. No exige construir tres aplicaciones ni sustituye una formación en cada tecnología. Se comparan las tres referencias y cada pareja corrige una implementación. La demo utiliza fragmentos y no es un router completo.

## Criterios WCAG

- [2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [2.4.3](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [3.2.3](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

## Paso a paso

1. Arranca el curso y abre los tres inicios desde el índice de esta práctica.
2. En cada uno visita Ayuda y observa título y foco; vuelve al Catálogo y aplica Online.
3. Compara useEffect/ref, nextTick/ref y updateComplete en las fuentes corregidas.
4. Elige una implementación y corrige etiqueta, región de estado y contexto tras la navegación.
5. Ejecuta npm run build:frameworks después de guardar; recarga el ejemplo.
6. Prueba navegación y filtro por separado y registra resultados.

## Comprobación y entrega

- [ ] Ayuda tiene título propio y su h1 recibe el foco tras la navegación.
- [ ] El filtro se llama Modalidad y Online muestra dos cursos.
- [ ] Aplicar conserva el foco y el recuento está en una región status.
- [ ] Volver a Catálogo mantiene navegación y ayuda disponibles.

Guarda código y evidencia antes/después en tu diario. Registra como pendiente lo que no hayas probado.

## Pistas

- El foco debe moverse después del renderizado, no antes.
- Un efecto dependiente del filtro movería el foco en una tarea que no es navegación.

## Ampliación

Añade una prueba de regresión que abra Ayuda, vuelva al Catálogo y aplique Online. La suite incluida comprueba ese contrato en las tres referencias.

## Archivos y actualización

Cada variante contiene react.js, vue.js y lit.js y una página HTML para cada ejemplo. No edites dist: se genera al instalar dependencias y al arrancar. Después de editar una fuente ejecuta `npm run build:frameworks` y recarga. Para regenerar al guardar, abre otra terminal con `npm run dev:frameworks`.

Lecturas oficiales: [React](https://react.dev/reference/react/useEffect), [Vue](https://vuejs.org/api/general.html#nexttick) y [Lit](https://lit.dev/docs/components/lifecycle/#updatecomplete).

Distribución: 5 minutos para la tarea común, 10 para comparar cada framework y 10 para corregir y verificar uno elegido. Las tres referencias quedan para consulta y la suite comprueba sus interacciones.
