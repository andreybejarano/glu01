// Desafio Extra

// 1
function mostrarValores(valor) {
    let x = valor;
    while (x < valor + 10) {
        x++;
        console.log(x);
    }
}
// mostrarValores(10);

// 2
function ejercicio2() {
    for (let num = 1; num <= 57; num += 3) {
        console.log(num)
    }
}
// console.log(ejercicio2());

// 3
function ejercicio3() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    return suma
}
// console.log(ejercicio3());

// 4
function bloqMayusc(texto) {
    for(let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());
    }
}
// bloqMayusc("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

// 5
function numeroPares(numeros) {
    let pares =[];
    for (num in numeros) {
        if (num % 2 == 0) {
            pares.push(num);
        }
    }
    return pares;
}
// console.log(numeroPares([1,2,3,4,5,2,4,6,8]))