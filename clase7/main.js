for (let index = 0; index <= 4; index++) {
    console.log(index);
}

// let i = 5;
// while (i <= 4) {
//     console.log(i);
//     i++;
// }

// let j = 10000;
// do {
//     console.log(j);
//     j++;
// } while (j <= 4);

let tabla9 = [];
// Llena un array con los numero de la tabla del 9
for (let index = 1; index <= 10; index++) {
    tabla9.push(index * 9);
}

// Recorre el array del primer elemento al ultimo
for (let index = 0; index < tabla9.length; index++) {
    console.log('9 x ' + (index + 1) + ' = ' + tabla9[index]);
}

// Recorre el array del ultimo elemento al primero
for (let index = (tabla9.length - 1); index >= 0; index--) {
    console.log('9 x ' + (index + 1) + ' = ' + tabla9[index]);
}








