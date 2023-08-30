const fs = require('fs');

const bicicletasFile = fs.readFileSync('./bicicletas.json', 'utf-8');
const bicicletas = JSON.parse(bicicletasFile);

// for (let index = 0; index < bicicletas.length; index++) {
//     console.log('--------');
//     console.log(bicicletas[index].id);
//     console.log(bicicletas[index].marca);
//     console.log(bicicletas[index].anio);
//     console.log('--------');
// }

// bicicletas.forEach((bicicleta) => {
//     console.log('--------');
//     console.log(bicicleta.id);
//     console.log(bicicleta.marca);
//     console.log(bicicleta.anio);
//     console.log('--------');
// });

// const marcas = [];
// for (let index = 0; index < bicicletas.length; index++) {
//     marcas.push(bicicletas[index].marca);
// }

const marcas = bicicletas.map((bicicleta) => bicicleta.marca);

// const bicicletasViejas = [];
// for (let index = 0; index < bicicletas.length; index++) {
//     if (bicicletas[index].anio < 2023) {
//         bicicletasViejas.push(bicicletas[index]);
//     }
// }

const bicicletasViejas = bicicletas.filter((bicicleta) => bicicleta.anio < 2023);

const bicicletaShimano = bicicletas.find((bicicleta) => bicicleta.marca === 'Shimano');

// let total = 0;
// for (let index = 0; index < bicicletas.length; index++) {
//     if (bicicletas[index].vendida === true) {
//         total += bicicletas[index].precio;
//     }
// }

const total = bicicletas.reduce((acc, current) => {
    if (current.vendida === true) {
        acc += current.precio;
    }
    return acc;
}, 0);

console.log(total);