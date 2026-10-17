# Alcance de la validación del material

El curso contiene 18 prácticas. Las comprobaciones de navegador revisan las referencias y estados seleccionados; los inicios conservan barreras intencionadas. Ejecuta npm ci y npm run check para preparar y comprobar la copia, y npm test para la suite.

La suite incluye 23 pruebas funcionales y de reglas automáticas: las 18 referencias principales, tres implementaciones reales de frameworks con varios estados, selector de valor, carrusel, reproducción y pistas de vídeo, demo de auditoría y el reto integrado. Incluye un recorrido de puntero táctil emulado, que no sustituye la prueba real con lector móvil. Comprueba redistribución a 320 píxeles y registra violaciones y resultados incompletos de axe en test-results/axe.json.

Las comprobaciones del vídeo verifican carga, duración, reproducción, pausa, pistas VTT y búsqueda de posiciones. No equivalen a una evaluación humana completa de la calidad de voz o de todos los controles nativos en cada navegador.

Las pruebas automáticas se ejecutan sobre las soluciones y casos previstos. No evalúan automáticamente todas las correcciones que hagas en inicio. Repite el protocolo manual sobre tu propia versión.

Los anuncios reales de NVDA, JAWS y VoiceOver y el uso táctil con lector necesitan ejecución y registro en el entorno objetivo. Las fichas comparadas están preparadas; no se declara que se hayan probado todas esas combinaciones. Las herramientas WAVE, Lighthouse y TAW también tienen pasos y registro, y su resultado depende de la ejecución concreta.

Superar las reglas automáticas no demuestra conformidad de una web completa. Distingue superado, fallo y no probado. Consulta [pruebas manuales](pruebas-manuales.md), [lectores](lectores-pantalla.md) y [herramientas](herramientas-evaluacion.md).
