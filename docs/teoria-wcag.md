# Teoría de accesibilidad y uso de WCAG

## Personas, tareas y barreras

La accesibilidad permite utilizar productos digitales a personas con distintas capacidades y formas de interacción. Una misma persona puede usar teclado, lector de pantalla, ampliación, control por voz o más de una ayuda. Las necesidades también pueden variar con el contexto. Evita deducir capacidades individuales a partir de una etiqueta diagnóstica.

Analiza siempre una tarea concreta. Para inscribirse hay que localizar el curso, comprender los requisitos, operar los controles, introducir datos y recuperar errores. Si una de esas partes falla, una interfaz visualmente cuidada puede impedir completar el proceso.

Las simulaciones visuales pueden ayudar a revisar una decisión de diseño, pero no reproducen la experiencia de vivir con una discapacidad. Cuando el proyecto lo permita, incluye personas con discapacidad en investigación y pruebas, con una participación accesible y reconocida. En clase se prueba la interfaz y se explica el impacto sin pedir al alumnado que simule una discapacidad.

## Cómo leer los requisitos

WCAG organiza requisitos verificables bajo cuatro principios: perceptible, operable, comprensible y robusto. Una pauta expresa un objetivo amplio. Un criterio de éxito concreta una condición que puede evaluarse. Una técnica muestra una posible manera de satisfacerla.

Los niveles son acumulativos. Para una declaración AA hay que satisfacer los criterios A y AA aplicables, además de las condiciones de conformidad, como páginas y procesos completos. No se declara AA porque un botón pase una lista ni porque una herramienta obtenga una puntuación determinada. El objetivo del curso es aprender a trabajar hacia WCAG 2.2 AA y documentar el alcance de lo comprobado.

La numeración no mide importancia ni severidad. Un fallo AA puede bloquear una tarea. Los nombres abreviados de la matriz son recordatorios de estudio; para decidir un resultado se consulta el requisito con sus definiciones, notas y excepciones.

## Documentos que se usan en el curso

| Recurso                                                       | Para qué sirve                              | Cómo interpretarlo                                               |
| ------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/)                     | Definir requisitos y conformidad.           | Fuente normativa.                                                |
| [Referencia rápida](https://www.w3.org/WAI/WCAG22/quickref/)  | Filtrar criterios y localizar técnicas.     | Herramienta de consulta.                                         |
| [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/) | Entender propósito, condiciones y ejemplos. | Explicaciones informativas.                                      |
| [Técnicas](https://www.w3.org/WAI/WCAG22/Techniques/)         | Estudiar implementaciones y fallos.         | Formas posibles de cumplir, no una única receta obligatoria.     |
| [APG](https://www.w3.org/WAI/ARIA/apg/)                       | Entender patrones de interacción ARIA.      | Guía informativa que requiere pruebas con los entornos objetivo. |

Método: describe la barrera, identifica un criterio candidato, lee sus condiciones, prueba el caso y explica la relación. Si falta información, registra «no evaluado» en vez de inventar un aprobado.

## HTML, CSS, JavaScript y ARIA

HTML crea estructura y controles. CSS debe conservar la lectura y operabilidad al cambiar presentación. JavaScript coordina estado e interacción. ARIA aporta semántica cuando hace falta: no añade por sí misma teclado ni lógica de negocio.

Prefiere un botón para acciones, un enlace con href para navegación, un label para un campo y una tabla para relaciones tabulares. Un aria-label puede sustituir el nombre accesible de un elemento y ocultar texto que antes resultaba útil. Revisa el nombre calculado y que contenga la etiqueta visible en los controles donde aplique.

Los patrones complejos crean expectativas. Un menú de aplicación, un grupo de pestañas y un diálogo no se manejan igual. Elige el patrón por la tarea y comprueba su contrato. [APG explica por qué una implementación ARIA incorrecta puede perjudicar la experiencia](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).

## Medidas que conviene distinguir

- Contraste del texto: 4,5:1 para texto normal y 3:1 para texto grande, con las excepciones del criterio. Grande significa al menos 18 pt normal o 14 pt en negrita. [Interpretación de 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- Ampliación: comprobar texto al 200 % y reflow a un ancho equivalente a 320 píxeles CSS en contenido vertical son pruebas diferentes. [Interpretación de 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- Área de interacción: 2.5.8 AA parte de 24 × 24 píxeles CSS y admite condiciones alternativas y excepciones, incluida la separación definida por el criterio. Adoptar 44 × 44 como objetivo de diseño puede mejorar el uso; 2.5.5 es AAA. [Interpretación de 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- Foco: 2.4.7 AA exige visibilidad y 2.4.11 AA evita la ocultación total por contenido del autor. 2.4.13 es AAA. [Interpretación de 2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

No se deduce el resultado solo de medir una propiedad CSS. Hay que revisar el estado que utiliza la persona y las condiciones completas del criterio.

## Cambios de WCAG 2.2 que se trabajan

El curso incluye microrretos para 2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7 y 3.3.8, que amplían A/AA. 2.4.12, 2.4.13 y 3.3.9 pertenecen a AAA. El criterio 4.1.1 se retiró de WCAG 2.2. Aun así conviene validar HTML y corregir relaciones rotas que puedan afectar a otros requisitos. [Resumen oficial de las novedades](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

## Normas y marco legal

Los ejercicios usan WCAG 2.2 AA como objetivo de aprendizaje. Para decidir obligaciones de un producto real hay que revisar su ámbito, el marco normativo aplicable y la versión de la norma citada. Aprobar una evaluación técnica de un componente no demuestra el cumplimiento de toda una ley.

El [RD 1112/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699) regula accesibilidad de sitios y aplicaciones del sector público dentro de su ámbito. La [Ley 11/2023, título I](https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022) transpone requisitos para determinados productos y servicios; su aplicación contempla condiciones, excepciones y transiciones. No interpretes estas normas como una obligación idéntica para cualquier sitio privado.

Consulta técnica realizada el 17 de octubre de 2026: [ETSI publica EN 301 549 V4.1.1 (2026-09)](https://www.etsi.org/technical-groups/hf/). Publicación técnica, adopción UNE y referencia armonizada en el Diario Oficial de la UE deben comprobarse separadamente. Aquí no se afirma que V4.1.1 haya sustituido ya a una referencia armonizada para una obligación concreta.

**Actividad de 10 minutos:** para una web municipal, una tienda en línea y una intranet, anota qué información necesitas antes de decidir el marco aplicable. Consulta ámbito, versión y fuente. Explica qué quedaría fuera de una simple revisión WCAG del HTML.

## Límites de la formación

Se practica una selección de criterios en casos controlados. Las ampliaciones y lecturas cubren otros escenarios. El mapa de cobertura evita confundir una introducción con una comprobación completa. El trabajo profesional requiere ampliar la muestra, revisar procesos y estados, y probar combinaciones reales de navegador y tecnología de apoyo.

## Comparar WCAG 2.1 y WCAG 2.2

WCAG 2.1 y 2.2 comparten la estructura de principios, pautas y niveles. WCAG 2.2 añade nueve criterios y retira 4.1.1 Procesamiento; seis de los nuevos criterios pertenecen a A/AA y tres a AAA. Los niveles se mantienen acumulativos. Elegir 2.2 como objetivo del curso no sustituye identificar la versión exigida por el marco aplicable.

Ejemplo: 2.4.7 Foco visible ya estaba en 2.1; 2.4.11 Foco no oculto (mínimo) se incorpora en 2.2. Un contorno perceptible no resuelve que una cabecera tape totalmente el elemento enfocado. [Cambios oficiales](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

## Acta Europea de Accesibilidad y UNE EN 301 549

El Acta Europea de Accesibilidad corresponde a la [Directiva (UE) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj/spa), de 2019. El 28 de junio de 2025 es la fecha de aplicación de las medidas prevista en su artículo 31; la norma tiene ámbitos y transiciones que deben revisarse. En España, el título I de la Ley 11/2023 transpone esa directiva y su entrada en vigor se fija en esa fecha, con la excepción de su disposición final decimoctava.

La denominación UNE-EN 301549 identifica la adopción española de la norma europea sobre productos y servicios TIC. Comprueba edición, alcance y referencia legal aplicable. La publicación de una versión por ETSI, su adopción por UNE y su cita como referencia armonizada son hechos distintos. [Información de UNE](https://revista.une.org/44/requisitos-de-accesibilidad-para-productos-y-servicios-tic.html).

Actividad del bloque normativo: para una web municipal y una tienda, registra entidad, servicio, ámbito, documento, versión y fecha. Señala qué dato falta antes de concluir. El objetivo es razonar sobre el ámbito, no declarar cumplimiento legal de la demo.

## Recorrido por How to Meet Understanding y Failures

1. Abre [How to Meet WCAG](https://www.w3.org/WAI/WCAG22/quickref/), selecciona versión y nivel y localiza 2.4.4.
2. Abre su [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) e identifica propósito, condiciones y contexto.
3. Abre [F89](https://www.w3.org/WAI/WCAG22/Techniques/failures/F89), un fallo documentado para un enlace cuyo único contenido es una imagen sin nombre accesible.
4. Compáralo con la imagen enlazada del inicio de P03. Describe qué dato falta, corrígelo y vuelve a evaluar el propósito real del enlace.
5. Registra criterio, justificación y prueba. No confundas un fallo documentado con una lista exhaustiva de todos los fallos posibles.

La referencia rápida ayuda a localizar; Understanding explica; técnicas y Failures ilustran implementaciones y fallos. La fuente normativa contiene el requisito y sus condiciones.
