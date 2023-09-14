# Pasos para crear un proyecto desde cero con Node.js + express + nodemon
1. Crear la carpeta del proyecto
2. Abrir esa carpeta con VSCode
3. En el VSCode abrir la terminal
4. En la terminal ejecutar:
``` shell
npm init -y
```
5. Instalar las dependencias base del proyecto, en nuestro caso van a ser 2:
``` shell
npm i express
npm i nodemon -D
```
6. Crear estructura base de carpetas y archivos
    |_src
        |_ public
            |_ css
            |_ img
        |_ views
        |_ app.js
7. Configurar `express` en el archivo `src/app.js`
8. Crear el script para iniciar el proyecto con nodemon, eso se hace en el `package.json` en la seccion `scripts` se agrega `"dev": "nodemon src/app.js"` y se configura la propiedad `main` con el valor `src/app.js`
9. Para ejecutar el programa en la terminal ejecutar, (Si se quiere parar el servidor se debe presionar control + c):
``` shell
npm run dev
```

    
