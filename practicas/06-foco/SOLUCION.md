# Solución comentada de diálogos y ciclo del foco

Se utiliza dialog.showModal, un título asociado y un cierre nativo mediante form method=dialog. Se define foco en Cancelar y se restaura el disparador al cerrar.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- El diálogo se anuncia con su título.
- Con el modal abierto no se operan los controles del fondo.
- Escape y Cancelar cierran y devuelven el foco a Abrir inscripción.
- El foco se mantiene visible y no queda totalmente tapado.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.
