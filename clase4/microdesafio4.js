//Micro dedafío 4
//Mi primera calculadora
const valor1 = 2;
const valor2 = 2;
const operacion = 'sumar';
switch (operacion) {
    case 'sumar':
        console.log('El resultado de sumar ' + valor1 + ' + ' + valor2 + ' es ' + (valor1 + valor2));
        break;
    case 'restar':
        console.log('El resultado de restar ' + valor1 + ' - ' + valor2 + ' es ' + (valor1 - valor2));
        break;
    case 'multiplicar':
        console.log('El resultado de multiplicar ' + valor1 + ' * ' + valor2 + ' es ' + (valor1 * valor2));
        break;
    case 'dividir':
        console.log('El resultado de dividir ' + valor1 + ' / ' + valor2 + ' es ' + (valor1 / valor2));
        break;
    default:
        console.log('Las operaciones aceptadas son: sumar - restar - multiplicar - dividir');
        break;
}