/** Solucion microdesafio 1 */
let electrodomesticos = ['Televisor', 'Heladera', 'Microondas', 'Pava_electrica', 'Licuadora', 'Lavaropas'];

console.log(electrodomesticos[3], '\n', electrodomesticos[1], '\n', electrodomesticos[5]);

electrodomesticos.push(electrodomesticos.shift());

electrodomesticos.push('Radio', 'Batidora');

console.log(electrodomesticos);

console.log(electrodomesticos.length);

if (electrodomesticos.includes('Batidora')) {
    console.log('Producto encontrado');
} else {
    console.log('El producto buscado no existe');
}

let texto = electrodomesticos.join(' ');

console.log(texto);

console.log(texto.length);

texto = texto.replace('Televisor', 'TV');

console.log(texto);

const textoArray = texto.split(' ');

console.log(textoArray);
