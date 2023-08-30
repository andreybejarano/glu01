// Requerir modulos propios
const operaciones = require('./utils/operaciones');
// Requerir moment que es un modulo de terceros
const moment = require('moment');
// Requerir FS que es un modulo nativo
const fs = require('fs');

// Uso los metodos del modulo operaciones
console.log(operaciones.sumar(3, 5));
console.log(operaciones.restart(6, 5));
console.log(operaciones.multiplicar(3, 4));

const filePath = './logs.txt';

// fileContent === null || fileContent === undefined || fileContent === false || fileContent === ''
if (!fs.existsSync(filePath)) {
    // Usando fs voy a crear un archivo que se llame logs.txt
    fs.writeFileSync(filePath, 'Este archivo va a contener los logs del sistema:\n');
}

// Cada vez que ejecute voy a agregar la fecha y la hora en la que se ejecuto
fs.appendFileSync(filePath, 'Se ejecuto ' + moment().format('YYYY-MM-DD HH:mm:ss') + '\n');

// Lee el contenido de un archivo y lo retorna
// aqui se esta almacenando en una variable llamada fileContent
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log(fileContent);
