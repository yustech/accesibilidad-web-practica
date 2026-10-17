# Protocolo de pruebas manuales

## Preparar condiciones reproducibles

Anota URL, versión del código, sistema, navegador, anchura y estado del componente. Usa datos ficticios. Describe la tarea antes de empezar, por ejemplo: filtrar cursos online y solicitar una plaza con un correo válido.

## Teclado

1. Recarga la página y comienza desde su inicio.
2. Usa Tab y Shift+Tab. Observa si el foco se ve y si el orden permite comprender y operar.
3. Activa enlaces con Enter y botones con Enter y Espacio. No exijas que todos los controles respondan a las mismas teclas: sigue su patrón.
4. Abre y cierra disclosures y diálogos. Comprueba foco inicial, salida, retorno y elementos del fondo.
5. Envía el formulario vacío, llega a cada error y corrige sin perder datos.
6. Aplica filtros y ordena tablas. Comprueba qué cambia y dónde queda el foco.

Registra bloqueos, foco invisible o totalmente oculto, pérdida de posición y controles que solo funcionan con ratón.

## Lector de pantalla

En Windows se propone NVDA con Chrome o Firefox; en macOS, VoiceOver con Safari. La combinación debe quedar registrada. No se necesita aprender todos los lectores del mercado para esta formación.

1. Recorre regiones y encabezados. ¿Permiten localizar el contenido?
2. Revisa enlaces y botones. ¿Nombre, función y estado describen la tarea?
3. Entra en los campos. ¿Se entienden etiqueta, obligatoriedad, ayuda y error?
4. Abre el diálogo y ciérralo. ¿El contexto y el retorno son comprensibles?
5. Aplica un filtro. ¿Se comunica el recuento sin repetir innecesariamente todo el contenido?

Como referencia inicial de NVDA: NVDA+Espacio cambia modos, H recorre encabezados y NVDA+F7 abre la lista de elementos. Comprueba los atajos de tu instalación y distribución de teclado. [Guía oficial de NVDA](https://download.nvaccess.org/documentation/userGuide.html).

El árbol de accesibilidad ayuda a inspeccionar nombres y estados, pero no confirma los anuncios reales de un lector. Registra literalmente el resultado observado y evita marcar aprobado si no lo has probado.

## Presentación

Prueba ampliación al 200 %, ancho de 320 píxeles CSS y espaciado de texto. Comprueba tanto el contenido inicial como errores, paneles y diálogos. Revisa que el objetivo enfocado no quede completamente tapado por una cabecera o panel del autor. Mide contraste con colores calculados y el fondo efectivo.

## Combinar con automatización

Ejecuta axe sobre los estados relevantes, no solo al cargar. Revisa también resultados incompletos que requieren evaluación humana. Vuelve a la tarea tras corregir. Una diferencia entre herramientas debe investigarse y no resolverse eligiendo la puntuación más alta.

La revisión de estas demos tiene alcance didáctico. Una evaluación de un producto real debe definir muestra, procesos, estados y tecnologías de apoyo relevantes. [Metodología WCAG-EM](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/).
