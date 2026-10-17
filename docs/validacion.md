# Alcance de la validación

## Comprobación inicial del 17 de octubre de 2026

Se han superado 14 pruebas funcionales en Chromium. axe se ha ejecutado sobre 23 estados,
incluidas las 16 soluciones, diálogos abiertos, errores de formulario y el reto final,
sin violaciones de las reglas WCAG seleccionadas. Se han comprobado referencias locales,
sintaxis y ausencia de desbordamiento horizontal en las 16 soluciones a 320 píxeles CSS.
Se han inspeccionado capturas del índice y del formulario integrado en escritorio y móvil.

La prueba con lectores de pantalla reales queda pendiente de registro. No se ha declarado
conformidad de las demos ni compatibilidad completa con NVDA, JAWS o VoiceOver.

## Qué comprueban las herramientas

`npm run check` verifica archivos requeridos, referencias locales, datos del curso y sintaxis de JavaScript. `npm test` abre Chromium, revisa las soluciones con axe y prueba interacciones representativas: botón, modal, navegación, ocultación, recuperación de errores, filtro, tabla, Shadow DOM, movimiento, Bootstrap, cambio de vista y reto final.

Los inicios se comprueban como casos con fallos intencionados. No se exige que pasen una regla de «cero violaciones». Las soluciones sí deben pasar las reglas automáticas seleccionadas y las pruebas funcionales del repositorio.

Esto no confirma anuncios reales de NVDA/JAWS/VoiceOver, compatibilidad completa entre navegadores, accesibilidad de todos los controles nativos multimedia ni conformidad de una web completa. Las fichas incluyen comprobaciones manuales que el docente y el alumnado deben registrar. Los microcasos y ampliaciones no están implementados como una aplicación de producción.

Para ejecutar sin conexión, descarga antes dependencias y el navegador de Playwright. Los resultados de cada ejecución se guardan localmente en `test-results/`; esa carpeta no se publica. No hay un sello de conformidad asociado a superar las pruebas.
