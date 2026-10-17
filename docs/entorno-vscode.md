# Perfil de Visual Studio Code

El curso usa el perfil «Accesibilidad Web» y un espacio de trabajo propio. Los ajustes de fuente, ajuste de línea y codificación se incluyen también en `.vscode/settings.json`, por lo que se aplican al abrir el proyecto.

## Abrir con el perfil

Desde la carpeta del repositorio:

```sh
code --profile "Accesibilidad Web" Accesibilidad-Web.code-workspace
```

VS Code crea un perfil vacío con ese nombre si no existe y lo asocia al espacio de trabajo. Para llevar los ajustes a otro ordenador, usa Perfiles > Importar perfil y selecciona `perfiles/Accesibilidad-Web.code-profile`. El archivo incluye ajustes legibles y no credenciales.

En Terminal > Ejecutar tarea encontrarás «Curso: iniciar prácticas», «Curso: comprobar archivos» y «Curso: pruebas de navegador». La extensión de Playwright es opcional; el curso funciona desde la terminal sin instalarla.

## Relación con GitHub

El repositorio se conecta mediante el remoto Git `origin`. El perfil organiza el editor, no autentica una cuenta. Para subir tus ramas desde VS Code utiliza la sesión de GitHub de tu equipo o la autenticación de Git ya configurada.

```sh
git remote -v
```

El destino del curso es `https://github.com/yustech/accesibilidad-web-practica.git`. El alumnado debe trabajar en su copia o rama según las instrucciones del docente, sin subir datos personales ni credenciales.

[Documentación oficial de perfiles](https://code.visualstudio.com/docs/configure/profiles).
