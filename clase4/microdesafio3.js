//Micro desafío 3
//Traductor - Usando el Switch
//"perro”,"gato", "puerta", "ventana", "mesa"

const palabra = 'perro';

switch (palabra) {
    case 'perro':
        console.log('Dog');
        break;
    case 'gato':
        console.log('Cat');
        break;
    case 'puerta':
        console.log('Door');
        break;
    case 'ventana':
        console.log('Window');
        break;
    case 'mesa':
        console.log('Table');
        break;

    default:
        console.log('La palabra ingresada es incorrecta”.');
        break;
}
