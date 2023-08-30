// Saldo Bancario

// 1
const operacioneBancarias = [
    1000,
    2000,
    -500,
    5000,
    -2000,
    2800,
    -400,
    10500,
    -4700,
    -3800
];

// 2
function calcularSaldo(operaciones) {
    // Declaramos acumuladores
    let depositos = 0;
    let retiros = 0;

    // Iteramos sobre las operaciones
    for (let index = 0; index < operaciones.length; index++) {
        if (operaciones[index] > 0) { // Evaluamos la condición
            depositos += operaciones[index];
        } else {
            retiros -= operaciones[index];
        }
    }

    // Retornamos según solicita la consigna
    return [
        depositos,
        retiros,
        depositos - retiros // saldo actual del cliente
    ];
}

// 3
function estadoDeCuenta(nombre, apellido, movimientos, callback) {
    const resultados = callback(movimientos);
    return [
        nombre + " " + apellido,
        resultados[0],
        resultados[1],
        resultados[2]
    ]
}

// Probamos la función
const estado = estadoDeCuenta("Gloria", "Medina", operacioneBancarias, calcularSaldo);
console.log("Estimada "+ estado[0] +":"); 
console.log("El monto total de los depósitos es de: $"+ estado[1] +".");
console.log("El monto total de los retiros es de: $"+ estado[2] +".");
console.log("Por lo tanto, su saldo actual en la cuenta es de: $"+ estado[3] +".");
