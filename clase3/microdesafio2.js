//calcular el nuevo sueldo a un trabajador
const nombre = "Victor";
const apellido = "Fuentes";
const sueldoActual = 170000;
const porcentajeAumento = 25;
const calculoAumento = (sueldoActual * porcentajeAumento) / 100;
const nuevoSueldo = sueldoActual + calculoAumento;
console.log('Hola, estimad@ ' + nombre + ' ' + apellido);
console.log('Con base en su sueldo actual: ' + '$' + sueldoActual);
console.log('Ha recibido un aumento del ' + porcentajeAumento + '%');
console.log('y su nuevo sueldo es de: ' + '$' + nuevoSueldo);


