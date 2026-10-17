# Solución comentada de inscripción y recuperación de errores

Se validan nombre y correo al enviar con mensajes propios. El resumen se reconstruye, cada error queda asociado y el foco permite recuperarse. role=status comunica éxito sin robar foco.

## Qué comparar

Abre `inicio/index.html` y `solucion/index.html` y compara `index.html`, `app.js` y `estilos.css`. La solución completa se incluye para poder recuperar el ritmo sin copiar fragmentos incompletos.

## Verificación de la referencia

- Al enviar vacío el foco va al resumen y sus enlaces llevan a cada campo.
- Cada campo anuncia etiqueta, ayuda y error cuando corresponda.
- Un segundo envío elimina errores resueltos sin borrar el resto de datos.
- Un envío correcto produce un mensaje de estado y no recarga ni transmite datos.

Las pruebas automáticas del repositorio verifican una parte del comportamiento. La prueba con lector de pantalla y la revisión visual humana siguen siendo necesarias. Registra el resultado real en la plantilla y justifica cualquier diferencia con la referencia.
