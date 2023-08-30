// Microdesafio 1

/* 
2. Crear un archivo (datosBici.js). Este archivo será un módulo propio, en el que
debes construir una función que tendrá la responsabilidad de importar el archivo
de (bicicletas.json). Para esto, seguramente nos convenga usar el módulo
nativo de NodeJs. File System - FS.

3. Guardar el contenido del archivo (bicicletas.json) en una variable y convertirla
a un tipo de dato array. ¿Se te ocurre cómo? Te dejamos un enlace para
profundizar sobre el recurso a utilizar.

Este archivo es un módulo propio y por tal motivo una vez que se crea.. ¿Recuerdas
cuál debe serla última línea del archivo?.
*/

const fs = require('fs');
const path = require('path');

const rutaArchivo = path.resolve(__dirname, 'bicicletas.json');

const bicicletasJSON = fs.readFileSync(rutaArchivo, "utf-8");

const bicicletasArray = JSON.parse(bicicletasJSON);

module.exports = bicicletasArray;