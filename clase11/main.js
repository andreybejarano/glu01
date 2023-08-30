// const colores = [
//     'rojo',
//     'amarillo',
//     'azul'
// ];

// const primer = colores[0];
// const segundo = colores[1];
// const tercero = colores[2];

// const [primero, segundo, tercero] = colores;

// const [, , tercero] = colores;

// let primero;
// let segundo;
// const resto = [];
// for (let index = 0; index < colores.length; index++) {
//     if (index === 0) {
//         primero = colores[index];
//     } else if (index === 1) {
//         segundo = colores[index];
//     } else {
//         resto.push(colores[index]);
//     }
// }


// console.log(tercero);
// console.log(resto);


// const auto = {
//     id: 1,
//     marca: 'Ford',
//     modelo: 'Fiesta',
//     anio: 2020
// };

// const marca = auto.marca;
// const modelo = auto.modelo;
// const anio = auto.anio;

// const {marca: brand} = auto;

// console.log(brand);

// const coloresPrimarios = [
//     'amarillo',
//     'azul',
//     'rojo'
// ];

// // const colores = coloresPrimarios.concat([]);
// const colores = [...coloresPrimarios];
// colores[0] = 'verde';

// console.log('colores primarios: ', coloresPrimarios);
// console.log('colores: ', colores);


const auto = {
    id: 1,
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2020,
    cantRuedas: 4
};

const autoPepe = {
    ...auto,
    id: 2,
    marca: 'Chevy',
    modelo: '400'
};

console.log('Auto', auto);
console.log('Auto Pepe', autoPepe);