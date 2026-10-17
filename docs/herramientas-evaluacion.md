# Comparar axe WAVE Lighthouse y TAW

Utiliza el mismo caso para entender qué detecta cada herramienta y qué requiere revisión humana. No necesitas cuatro instalaciones para empezar: axe ya forma parte del curso; las interfaces y servicios externos requieren preparación y conexión cuando corresponda.

| Herramienta | Uso en el ejercicio                                                         | Límite que debes registrar                                                                                                                      |
| ----------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| axe         | Extensión axe DevTools para revisión interactiva o suite local con axe-core | Revisa estados concretos; resultados incompletos y uso real requieren evaluación humana.                                                        |
| WAVE        | Extensión del navegador o servicio sobre una URL pública                    | Sus alertas requieren interpretación; una imagen con alt puede seguir teniendo una alternativa inadecuada.                                      |
| Lighthouse  | Panel Lighthouse de Chrome, categoría Accessibility                         | La puntuación excluye comprobaciones manuales y no certifica conformidad.                                                                       |
| TAW         | Servicio web de tawdis.net con una URL pública                              | Identifica versión, nivel y alcance; su documentación referencia WCAG 2.1 y UNE-EN 301549. No equivale a evaluar automáticamente todo WCAG 2.2. |

## Caso compartido

Abre [la demo local](../demo-auditoria/index.html) desde el servidor. Para TAW y los servicios por URL usa [la demo pública del curso](https://yustech.github.io/accesibilidad-web-practica-alumnado/). Sus páginas son intencionadamente pequeñas, con datos ficticios; no envían formularios ni necesitan iniciar sesión. La URL de GitHub que muestra código no equivale a la página HTML publicada.

Primero prueba Caso inicial con teclado. Intenta identificar el campo y activar Guardar interés. Anota dos observaciones antes de ejecutar herramientas.

## axe paso a paso

1. Abre Caso inicial e inicia la extensión axe DevTools en las herramientas de desarrollo, si está disponible.
2. Ejecuta el análisis del estado visible y revisa un hallazgo de nombre, etiqueta o contraste.
3. Inspecciona el elemento afectado y confirma la barrera manualmente.
4. Repite sobre Referencia corregida y registra el cambio, sin deducir conformidad completa.
5. Como alternativa local, ejecuta `npm test`; la suite incluye una prueba de la demo con axe-core. Sus resultados no sustituyen el análisis de tu propio código editado.

## WAVE paso a paso

1. Abre Caso inicial. Activa la [extensión WAVE](https://wave.webaim.org/extension/) preparada en tu navegador, o introduce su URL pública en WAVE web.
2. Revisa errores, alertas, estructura y contraste. Selecciona un icono y localiza su elemento.
3. Describe un problema confirmado y una alerta que necesite juicio. No copies todas las alertas como fallos normativos.
4. Analiza Referencia corregida con las mismas condiciones y compara.

## Lighthouse paso a paso

1. Abre la demo en Chrome y sus herramientas de desarrollo. Selecciona Lighthouse; si el panel no aparece, consulta la ayuda de la versión instalada.
2. Selecciona Accessibility y el modo de navegación. Registra dispositivo o emulación elegidos.
3. Ejecuta el informe; la herramienta puede recargar la página y no representa todos sus estados interactivos.
4. Abre un fallo, confirma el elemento y revisa la lista de comprobaciones manuales.
5. Repite sobre la referencia y explica por qué una puntuación alta no confirma teclado, contenido ni el proceso completo.

## TAW paso a paso

1. Abre [TAW](https://www.tawdis.net/?lang=es) e introduce la URL pública de Caso inicial terminada en inicio.html. No introduzcas el localhost privado de tu equipo.
2. Elige nivel y tecnologías si el servicio ofrece esos controles y registra la configuración.
3. Solicita el análisis disponible. Si una función pide correo o cuenta, puedes usar el resumen o la demostración preparada; no necesitas facilitar datos para completar el diagnóstico local.
4. Revisa un problema y una advertencia y contrástalos con la página. Si el servicio no responde, registra indisponible y conserva los resultados locales; no inventes un informe.
5. Repite con solucion.html y distingue la cobertura declarada por TAW del objetivo WCAG 2.2 del curso.

## Distribución del bloque de auditoría de 65 minutos

5 minutos para tarea y observación; 20 para comparar las cuatro herramientas con el mismo caso; 25 para documentar y corregir; 15 para repetir la tarea y redactar aceptación. La presentación de herramientas es comparada, no cuatro talleres independientes.

## Entrega

Completa [el registro](../plantillas/comparativa-herramientas.md). Incluye URL/estado, entorno, hallazgo, verificación humana y cambio tras corregir. Si falta una herramienta, identifícala como no ejecutada y utiliza su ficha para interpretar el alcance.

Fuentes: [axe-core](https://github.com/dequelabs/axe-core), [WAVE](https://wave.webaim.org/extension/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) y [TAW](https://www.tawdis.net/proj?lang=es).
