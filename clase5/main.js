// let contador = 0;
// function operar(num1, num2, operacion = 'sumar') {
//     contador++;
//     switch (operacion) {
//         case 'sumar':
//             return num1 + num2;
//         case 'restar':
//             return num1 - num2;
//         case 'multiplicar':
//             return num1 * num2;
//         case 'dividir':
//             if (num2 == 0) {
//                 return 'No se puede dividir por 0';
//             }
//             return num1 / num2;
//         default:
//             return 'la operacion debe ser sumar. restar, multiplicar o dividir';
//     }
// }

// function reiniciarContador() {
//     contador = 0;
// }


// const resultado1 = operar(3, 5);
// const resultado2 = operar(4, 2, 'restar');
// const resultado3 = operar(9, 8, 'multiplicar');
// const resultado4 = operar(4, 2, 'dividir');
// const resultado5 = operar(4, 0, 'dividir');

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);
// console.log(resultado4);
// console.log(resultado5);
// console.log('La funcion operar se llamo ' + contador + ' veces');

// reiniciarContador();

// console.log('Ahora el contador es ' + contador);

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }
    return num1 / num2;
}

/**
 * @param {number} num1 
 * @param {number} num2 
 * @param {function} cb 
 * @returns {number|string}
 */
function operarConCb(num1, num2, cb) {
    if (!cb) {
        return 'El callback es obligatorio';
    }
    if (typeof cb !== 'function') {
        return 'El callback debe ser una funcion';
    }
    const resultado = cb(num1, num2);
    return resultado;
}

const resultado1 = operarConCb(1, 2, sumar);
const resultado2 = operarConCb(20, 10, restar);
const resultado3 = operarConCb(10, 9, multiplicar);
const resultado4 = operarConCb(15, 3, dividir);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);