# Plan de accesibilidad del portal de formación

Ejemplo didáctico para completar y adaptar durante 25 minutos. Los datos de planificación son ficticios. Las cifras describen un supuesto de trabajo, no resultados medidos del repositorio.

## Alcance y objetivo

Organización ficticia: Aula Abierta. Alcance: catálogo, filtro, favoritos, ficha, inscripción, ayuda y vídeo de instrucciones. Fuera de la primera iteración: pagos y documentos históricos, que se inventariarán para una siguiente fase. Responsable del plan: coordinación del producto; patrocinio: dirección de formación.

Objetivo técnico de trabajo: evaluar el proceso de inscripción frente a WCAG 2.2 A y AA. El marco legal y la norma aplicables se revisan con la persona responsable antes de declarar una obligación. Participantes: personas con diferentes formas de interacción; se planifica una revisión remunerada con dos personas con discapacidad y se adapta el material a sus necesidades.

## Diagnóstico supuesto

La muestra incluye seis vistas y los estados inicial, error y éxito del formulario. Se combinan teclado, lector y herramientas. En el supuesto se encuentran tres bloqueos prioritarios: acción inaccesible por teclado, errores sin asociación y pérdida de contexto al navegar. La línea base de este ejemplo tiene cero de tres tareas críticas verificadas.

## Plan de acciones

| Acción                                 | Prioridad                 | Responsable            | Recursos                               | Plazo relativo | Evidencia                                                  |
| -------------------------------------- | ------------------------- | ---------------------- | -------------------------------------- | -------------- | ---------------------------------------------------------- |
| Corregir activación y foco del diálogo | Bloqueo de la inscripción | Desarrollo             | 4 horas y revisión de diseño           | Semana 1       | Abrir, operar y cerrar con teclado, con retorno.           |
| Asociar errores y conservar datos      | Bloqueo de recuperación   | Desarrollo y contenido | 4 horas y revisión por pareja          | Semana 1       | Envío vacío y corregido con etiqueta, ayuda y error.       |
| Coordinar vista, título y foco         | Pérdida de orientación    | Desarrollo             | 3 horas y suite de regresión           | Semana 2       | Recorrido Ayuda y Catálogo en el framework utilizado.      |
| Revisar vídeo y alternativas           | Información no disponible | Contenido              | 3 horas de edición y prueba            | Semana 2       | Subtítulos, versión descrita y transcripción contrastadas. |
| Validar tareas con usuarios            | Confirmar uso real        | UX y coordinación      | 2 sesiones con participación accesible | Semana 3       | Observaciones, incidencias y decisiones registradas.       |

## Integración y seguimiento

Diseño revisa estados y lectura; contenido redacta instrucciones y errores; desarrollo conserva contratos de componentes y pruebas; revisión comprueba procesos antes de publicar. Una incidencia reabierta vuelve a la lista con responsable y fecha.

| Indicador                                     | Línea base supuesta | Objetivo                                | Revisión                            |
| --------------------------------------------- | ------------------- | --------------------------------------- | ----------------------------------- |
| Tareas críticas verificadas                   | 0 de 3              | 3 de 3 sin bloqueos en la muestra       | Semanal, responsable de revisión    |
| Incidencias prioritarias abiertas             | 3                   | 0 antes de publicar el proceso          | Dos veces por semana, producto      |
| Componentes cambiados con aceptación y prueba | 0 registrados       | Todos los modificados en esta iteración | Cada revisión de código, desarrollo |

El canal de incidencias es el tablero del equipo ficticio; coordinación acusa recibo en dos días laborables y asigna prioridad. La siguiente revisión se realiza una semana después de la publicación y después de cambios del formulario. El cierre exige evidencia y registra las combinaciones no probadas.

## Actividad de 25 minutos

1. En 5 minutos, copia la [plantilla](../plantillas/plan-accesibilidad.md) y delimita tu proceso.
2. En 10 minutos, traslada tres incidencias del reto a acciones con responsable, recursos, plazo y evidencia.
3. En 5 minutos, define dos indicadores, su línea base y revisión.
4. En 5 minutos, explica una decisión de prioridad y un riesgo pendiente.

Entrega el plan con los dos criterios de aceptación del reto. [Recursos de planificación y responsabilidades de W3C](https://www.w3.org/WAI/planning/).
