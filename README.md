# Accesibilidad web práctica

Curso de 20 horas en español para personas con HTML, CSS y JavaScript de nivel básico-intermedio. Se aprende reparando un portal de formación ficticio, explicando cada barrera y probando la corrección. Las WCAG forman parte de las decisiones de cada ejercicio.

El lunes comienza con un bloque teórico de 90 minutos, de 09:00 a 10:30, sobre accesibilidad, personas y barreras, WCAG, marco normativo y evaluación. Consulta [Fundamentos de accesibilidad](docs/00-fundamentos.md). El entorno se prepara de 10:40 a 11:00 y la primera práctica comienza a las 11:00.

## Primer arranque

Instala [Node.js LTS](https://nodejs.org/) y Git. Abre esta carpeta en VS Code y, en su terminal:

```sh
npm ci
npm start
```

Abre [el índice de prácticas](http://127.0.0.1:4173). `Ctrl+C` detiene el servidor. No hay compilación. Tras la instalación inicial, las prácticas, el audio y Bootstrap se sirven localmente. Los enlaces de documentación requieren conexión.

Si el puerto está ocupado, usa `npm start -- --port=4174` y abre ese puerto. Si no puedes instalar Node, las prácticas 01–14 y 16 se pueden abrir como archivos, aunque se recomienda servidor y la 15 requiere el entorno preparado.

## Recorrido

| Práctica                                             | Tema                                       | Correspondencia con materiales |
| ---------------------------------------------------- | ------------------------------------------ | ------------------------------ |
| [01-documento](practicas/01-documento/README.md)     | Documento HTML e idioma                    | 1                              |
| [02-estructura](practicas/02-estructura/README.md)   | Regiones, encabezados y orden              | 2                              |
| [03-enlaces](practicas/03-enlaces/README.md)         | Enlaces y alternativas de imágenes         | 3                              |
| [04-acciones](practicas/04-acciones/README.md)       | Botones, nombre y estado                   | 4                              |
| [05-estilos](practicas/05-estilos/README.md)         | Contraste, ampliación y preferencias       | 5                              |
| [06-foco](practicas/06-foco/README.md)               | Diálogos y ciclo del foco                  | 6                              |
| [07-navegacion](practicas/07-navegacion/README.md)   | Navegación desplegable                     | 7                              |
| [08-ocultacion](practicas/08-ocultacion/README.md)   | Contenido oculto y ayudas                  | 8                              |
| [09-formularios](practicas/09-formularios/README.md) | Inscripción y recuperación de errores      | 9                              |
| [10-filtros](practicas/10-filtros/README.md)         | Filtros y anuncios de resultados           | 10                             |
| [11-tablas](practicas/11-tablas/README.md)           | Tablas y ordenación                        | 11                             |
| [12-componentes](practicas/12-componentes/README.md) | Componentes y Shadow DOM                   | 12                             |
| [13-auditoria](practicas/13-auditoria/README.md)     | Auditoría y criterios de aceptación        | 13                             |
| [14-multimedia](practicas/14-multimedia/README.md)   | Audio, vídeo y movimiento                  | Anexo multimedia               |
| [15-bootstrap](practicas/15-bootstrap/README.md)     | Bootstrap real y responsabilidad del autor | Anexos Bootstrap               |
| [16-rutas](practicas/16-rutas/README.md)             | Cambios de vista en aplicaciones           | Anexo SPAs y frameworks        |

Cada carpeta contiene teoría, enunciado, criterios WCAG, pistas, pruebas manuales, inicio y solución comentada. Las ampliaciones no son una obligación para terminar las cuatro sesiones. El [horario](docs/guia-docente.md) indica qué se hace en clase.

- [Guía teórica de WCAG y normas](docs/teoria-wcag.md).
- [Mapa completo A y AA y alcance real de las prácticas](docs/cobertura-wcag.md).
- [Protocolo de pruebas manuales](docs/pruebas-manuales.md).
- [Microrretos de WCAG 2.2](docs/microrretos-wcag22.md).
- [Multimedia y decisiones sobre vídeo](docs/multimedia.md).
- [Reto final](reto-final/README.md) y [rúbrica](plantillas/rubrica.md).
- [Preparar VS Code](docs/entorno-vscode.md).

## Comprobar el repositorio

```sh
npm run check
npx playwright install chromium
npm test
```

Las pruebas de navegador arrancan su propio servidor y revisan soluciones, estados y regresiones. Los inicios contienen barreras intencionadas y se verifican por separado como casos de enseñanza. Las comprobaciones automáticas no certifican conformidad. Consulta [el alcance de validación](docs/validacion.md).

## Trabajo en clase

Trabaja en parejas, alternando edición y revisión. Antes de mirar una solución, anota la tarea, la barrera y el criterio que crees aplicable. Después prueba la tarea otra vez y explica qué ha cambiado. Usa datos ficticios en todas las prácticas.

Para entregar, crea una rama propia, modifica el inicio y adjunta tu informe en `entregas/`. El repositorio público contiene soluciones visibles. Los datos de alumnado no se suben al repositorio.

## Procedencia

El diseño del recorrido conserva las áreas temáticas del material del formador y del Web Accessibility Cookbook. Los textos y ejercicios de este repositorio son originales; no se incluyen capítulos, libros ni traducciones extensas. Los enlaces de W3C, Bootstrap y VS Code permiten consultar las fuentes técnicas. El audio y el icono de los ejercicios se han creado para este curso. Las dependencias mantienen sus respectivas licencias. No se ha asignado una licencia general de reutilización al contenido del curso.
