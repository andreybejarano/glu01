function alquiler(tipoVehiculo, dias, sillaBebe) {
    let total = 0;
    switch (tipoVehiculo) {
        case 'Compacto':
            total = 14000 * dias;
            break;
        case 'Mediano':
                total = 17000 * dias;
                break;
        case 'Camioneta':
            total = 28000 * dias;
            break;
        default:
            return `El tipo ${tipoVehiculo} es incorrecto, debe ser Compacto, Mediano o Camioneta`;
    }

    let mensaje = `Estimado cliente: con base en el tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${dias} días utilizados`;

    if (sillaBebe) {
        mensaje += ', Ademas pediste una silla para bebe';
        total += 1200 * dias;
    }

    mensaje += `. el monto total a pagar es de: $${total}`;

    return mensaje;
}

console.log(alquiler('Mediano', 10, true));
console.log(alquiler('Camioneta', 10, true));
console.log(alquiler('Compacto', 10, false));
console.log(alquiler('Camion', 10, true));