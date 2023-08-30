
/* 1 */
const arrayNumeros = [4, 5, 76, 135, 22, 9, 87, 15, 1, 45];

/* 2 */
const [num1, , num2, , num3, ...resto] = arrayNumeros;

console.log(resto);

/* console.log(num1, num2, num3); */

/* 3 */
const nuevoArrayNumeros = [num1, num2, num3];

console.table(nuevoArrayNumeros);

/* 4 */

const mascota = {
    nombre: "Luffy",
    tipo: "perro",
    color: "negro",
    raza: "Border Collie"
}

const {nombre, tipo, color, raza} = mascota;

console.log("Hola les presento a mi mascota, su nombre es: " + nombre + ", es un hermoso " + tipo + ", de color: " + color + " y su raza es: " + raza);