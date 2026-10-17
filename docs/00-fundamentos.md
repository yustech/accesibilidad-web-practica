# Fundamentos de accesibilidad

Este bloque abre el curso el lunes 19 de octubre de 2026, de 09:00 a 10:30. Durante 90 minutos estudiarás por qué aparecen barreras, cómo afectan a las tareas y cómo utilizar WCAG para tomar decisiones. Las explicaciones se acompañan de ejemplos comentados y preguntas breves. La instalación del entorno y la edición de código comienzan después de este bloque y de la pausa.

## Objetivos

Al terminar podrás describir una barrera y su efecto sobre una tarea, distinguir los cuatro principios de WCAG, localizar un criterio y su nivel, diferenciar una norma técnica de una obligación legal y explicar qué necesita una comprobación de accesibilidad.

## Recorrido de los 90 minutos

| Horario     | Contenido                                                               | Comprobación de comprensión                                                |
| ----------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 09:00–09:15 | Qué es la accesibilidad y su relación con usabilidad y diseño inclusivo | Describe una tarea digital que debe poder completar una persona.           |
| 09:15–09:35 | Diversidad de necesidades, barreras y tecnologías de apoyo              | Relaciona tres barreras con tareas y formas de interacción.                |
| 09:35–10:00 | WCAG: principios, pautas, criterios, niveles y conformidad              | Localiza un criterio y explica la condición que exige.                     |
| 10:00–10:15 | Normas técnicas y marco legal                                           | Identifica qué información falta para decidir las obligaciones de un caso. |
| 10:15–10:30 | Evaluación y responsabilidades durante un proyecto                      | Propón una prueba y distingue lo observado de lo pendiente.                |

## Qué es la accesibilidad

La accesibilidad web permite que las personas con discapacidad puedan percibir, comprender, navegar e interactuar con los contenidos y servicios digitales. Una barrera puede impedir una tarea completa aunque la interfaz tenga buen aspecto. También puede haber necesidades temporales o condiciones de uso que hagan especialmente útil una solución accesible.

La usabilidad estudia la facilidad de uso en un contexto; la accesibilidad se centra en evitar la exclusión de personas con discapacidad. El diseño inclusivo incorpora la diversidad de personas y contextos al proceso. Son perspectivas relacionadas y conviene comprobar sus resultados con personas diversas.

Caso conductor del curso: encontrar una formación, conocer sus condiciones y completar la inscripción. Describe una tarea concreta antes de valorar una pantalla como «accesible» o «inaccesible».

[Introducción de W3C a la accesibilidad](https://www.w3.org/WAI/fundamentals/accessibility-intro/).

## Accesibilidad universal y accesibilidad web

La accesibilidad universal se refiere a condiciones de entornos, procesos, bienes, productos y servicios que permiten comprenderlos y utilizarlos con autonomía y seguridad. La accesibilidad web aplica esa finalidad a contenidos, interfaces y servicios de la Web. No se limita a la percepción visual de una pantalla.

Compara un edificio de formación y su portal: una entrada accesible no basta si después una escalera impide llegar al aula; una portada web accesible no basta si el formulario de inscripción bloquea el teclado. En ambos casos hay que considerar el recorrido completo. La rampa no es una traducción literal de un atributo HTML: compara la función de eliminar la barrera, no una equivalencia técnica.

El impacto social puede ser no poder matricularse, acceder a un servicio o trabajar con autonomía. [Definiciones de accesibilidad universal y diseño universal en la legislación española](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12632#a2).

## Diseño Universal aplicado a UX y UI

El Diseño Universal busca que productos y entornos puedan ser utilizados por la mayor diversidad de personas posible sin requerir una adaptación específica. No excluye las tecnologías de apoyo cuando sean necesarias. En el curso lo concretamos en uso flexible, información perceptible, manejo comprensible y recuperación de errores.

| Decisión de diseño                 | Aplicación en el portal                                       | Comprobación                                                |
| ---------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| Ofrecer distintas formas de operar | Acciones disponibles mediante teclado y puntero               | Reservar plaza sin ratón.                                   |
| Hacer perceptible la información   | Error con texto, relación con el campo y presentación visible | Identificar y corregir el dato sin depender solo del color. |
| Permitir ajustes                   | Texto ampliable y distribución flexible                       | Leer y operar al ampliar y estrechar la ventana.            |
| Facilitar recuperación             | Conservar datos válidos tras un error                         | Corregir el correo sin volver a escribir el nombre.         |

Pregunta: elige una decisión y explica qué necesidad resuelve. Una aplicación práctica del principio requiere verificar el resultado con el producto y sus usuarios.

## Necesidades permanentes, temporales y situacionales

| Contexto    | Ejemplo                                               | Barrera posible                 | Alternativa que se comprueba                        |
| ----------- | ----------------------------------------------------- | ------------------------------- | --------------------------------------------------- |
| Permanente  | Una persona ciega utiliza lector de pantalla          | Campo sin nombre accesible      | Etiqueta asociada y lectura comprensible del campo. |
| Temporal    | Una lesión impide manejar el ratón durante un periodo | Botón que solo responde al clic | Activación mediante teclado.                        |
| Situacional | Un entorno impide escuchar un audio                   | Información solo sonora         | Alternativa textual con información equivalente.    |

Las situaciones no describen la misma experiencia ni permiten deducir capacidades individuales. La barrera está en la interacción entre persona, entorno y producto. No es necesario simular una discapacidad para revisar la interfaz.

## Personas, barreras y formas de interacción

Una persona puede utilizar teclado, lector de pantalla, ampliación, control por voz u otras herramientas, por separado o combinadas. Las necesidades no se deducen únicamente de un diagnóstico. Un lector de pantalla comunica mediante voz o braille la información que recibe del navegador; necesita estructura, nombres y estados que el código exponga correctamente.

| Situación de uso             | Barrera de la interfaz                             | Efecto sobre la tarea                             |
| ---------------------------- | -------------------------------------------------- | ------------------------------------------------- |
| Navegación con teclado       | Un control solo responde al ratón                  | No se puede activar la acción.                    |
| Uso de lector de pantalla    | Un campo carece de una etiqueta asociada           | Puede no entenderse qué dato hay que introducir.  |
| Lectura con ampliación       | El contenido se recorta al aumentar el tamaño      | Se pierde información o acceso a un control.      |
| Acceso a contenido sonoro    | Un audio informativo carece de alternativa textual | La información no está disponible sin escucharlo. |
| Comprensión de instrucciones | El error solo dice «incorrecto»                    | No se sabe cómo recuperar la tarea.               |

Pregunta breve: elige tres casos y explica qué necesita cambiar en el producto. No se trata de simular una discapacidad. Distingue entre una observación sobre una interfaz y la experiencia de una persona.

## Cómo se organizan las WCAG

WCAG significa Web Content Accessibility Guidelines. En el curso utilizamos WCAG 2.2 con A y AA como objetivo de aprendizaje.

| Principio    | Pregunta que ayuda a comprenderlo                                                                |
| ------------ | ------------------------------------------------------------------------------------------------ |
| Perceptible  | ¿Se puede obtener la información mediante las formas de percepción necesarias?                   |
| Operable     | ¿Se puede recorrer y manejar la interfaz con las formas de interacción necesarias?               |
| Comprensible | ¿Se entiende el contenido y se puede utilizar la interfaz de forma predecible?                   |
| Robusto      | ¿El contenido puede interpretarse de forma fiable por agentes de usuario y tecnologías de apoyo? |

Una pauta expresa un objetivo amplio. Un criterio de éxito define una condición verificable. Una técnica describe una posible implementación. El documento WCAG contiene los requisitos; Understanding ayuda a interpretarlos y las técnicas muestran formas de satisfacerlos. Un patrón de interacción de APG es una guía informativa que también necesita comprobarse.

Los niveles son acumulativos: una declaración AA exige satisfacer A y AA, además de los requisitos de conformidad, incluido el alcance de páginas y procesos completos. El nivel no mide la gravedad de una incidencia. Un componente que funciona o una herramienta sin hallazgos no certifican una web completa.

Ejemplo de lectura: abre [2.4.2 Título de página](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html). Identifica su nivel A, la condición sobre tema o propósito y el beneficio de reconocer la página. Compara «Página» con «Inscripción al curso de HTML accesible». Escribe qué comprobarías y qué resultado esperarías.

[Resumen de WCAG de W3C](https://www.w3.org/WAI/standards-guidelines/wcag/). Para las condiciones completas, consulta la [fuente normativa WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Normas y obligaciones

WCAG define requisitos técnicos para contenido web. EN 301 549 aborda requisitos de accesibilidad de productos y servicios TIC. Una ley o reglamento determina obligaciones dentro de su ámbito. Hay que comprobar qué documento y versión se aplican al producto concreto; no basta con asociar una cifra de WCAG a cualquier obligación legal.

El [RD 1112/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699) regula sitios web y aplicaciones para dispositivos móviles del sector público dentro de su ámbito. El título I de la [Ley 11/2023](https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022) aborda la accesibilidad de determinados productos y servicios, con condiciones y excepciones. No deduzcas que las obligaciones son idénticas para todas las webs privadas.

Caso de discusión: una web municipal y una tienda en línea. Anota entidad responsable, producto o servicio, ámbito, fechas relevantes y norma y versión aplicables. Si no dispones de esos datos, registra qué necesitas consultar antes de concluir. El objetivo es aprender a localizar y delimitar requisitos.

La [teoría común](teoria-wcag.md) amplía las fuentes y la distinción entre publicación técnica, adopción y referencia armonizada.

## Cómo se comprueba y quién participa

El proceso comienza al investigar necesidades y definir requisitos. Diseño, contenidos, desarrollo y revisión aportan decisiones que afectan a la accesibilidad. Las pruebas se incorporan durante el proyecto y se repiten cuando cambian componentes o tareas.

Las herramientas automáticas detectan ciertas clases de problemas. La revisión manual comprueba tareas y condiciones que requieren interpretación. Las pruebas con tecnologías de apoyo y la participación de personas con discapacidad aportan información que no se deduce de una puntuación.

El método del curso será: describir la tarea, observar la barrera, consultar el criterio candidato, corregir, repetir la prueba y registrar el resultado. Distingue «superado», «fallo» y «no probado».

## Comprobación al terminar el bloque

Responde brevemente y conserva tus notas:

1. ¿Qué tarea impide completar un control que solo funciona con ratón?
2. ¿En qué se diferencian una pauta, un criterio y una técnica?
3. ¿Qué niveles deben considerarse para una declaración AA y por qué no basta con revisar un botón?
4. ¿Qué datos necesitas antes de afirmar que una obligación legal se aplica a un sitio?
5. ¿Qué prueba manual añadirías a un resultado automático sin hallazgos?

Después: pausa de 10:30 a 10:40. De 10:40 a 11:00 prepara el entorno con la [guía del editor](entorno-vscode.md). P01 comienza a las 11:00.
