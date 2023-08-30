//Definimos la función totalAPagar como arrow function
let totalAPagar = (tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    let total = 0;
    switch (tipo) {
        case "Carne a la parrilla":
            total += 1800;
            break;
        case "Pollo":
            total += 1500;
            break;
        case "Vegetariana":
            total += 1200;
            break;
        default:
            return tipo + ' No disponible.';
    }

    if (jamon) {
        total += 30;
    }
    if (queso) {
        total += 25;
    }
    if (salsa) {
        total += 5;
    }
    if (mayonesa) {
        total += 5;
    }
    if (mostaza) {
        total += 5;
    }
    if (tomate) {
        total += 15;
    }
    if (lechuga) {
        total += 10;
    }
    if (cebolla) {
        total += 10;
    }

    return total;
}

//Definimos la función respuesta y le pasamos un callback
function respuesta(nombre, apellido, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    return "Estimado " + nombre + " " + apellido + " el monto total a pagar es de: $" + callback(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);
}

//Ejecutamos la función respuesta y mostramos el resultado por consola
console.log(respuesta("Nicolás", "Fernández", "Carne a la parrilla", true, true, false, true, true, true, true, false, totalAPagar))
console.log(respuesta("Sebastián", "Maciel", "Vegetariana", false, true, true, false, true, false, true, true, totalAPagar))
console.log(respuesta("Lucia", "Santoro", "Pollo", true, false, false, true, false, true, true, true, totalAPagar))