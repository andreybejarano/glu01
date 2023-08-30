//Micro desafío 1
//2-A Evaluar el perfil del usuario
const perfil = 'ASISTENTE';
// if (perfil === ''){
//     console.log('Debe especificar el perfil del usuario');
// }else if (perfil === 'administrador' || perfil === 'Administrador' || perfil=== 'ADMINISTRADOR'){
//     console.log('Usted tiene todos los privilegios de uso del sistema');
// }else if (perfil === 'asistente' || perfil === 'Asistente' || perfil=== 'ASISTENTE') {
//     console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
// }else if (perfil === 'invitado' || perfil === 'Invitado' || perfil=== 'INVITADO') {
//     console.log('Usted sólo tiene permisos de consultar datos');
// }else {
//     console.log('Debe especificar un perfil válido');
// }

// switch (perfil) {
//     case '':
//         console.log('Debe especificar el perfil del usuario');
//         break;
//     case 'administrador':
//     case 'Administrador':
//     case 'ADMINISTRADOR':
//         console.log('Usted tiene todos los privilegios de uso del sistema');
//         break;
//     case 'asistente':
//     case 'Asistente':
//     case 'ASISTENTE':
//         console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
//         break;
//     case 'invitado':
//     case 'Invitado':
//     case 'INVITADO':
//         console.log('Usted sólo tiene permisos de consultar datos');
//         break;
//     default:
//         console.log('Debe especificar un perfil válido');
//         break;
// }

switch (perfil.toLowerCase()) {
    case '':
        console.log('Debe especificar el perfil del usuario');
        break;
    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'asistente':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'invitado':
        console.log('Usted sólo tiene permisos de consultar datos');
        break;
    default:
        console.log('Debe especificar un perfil válido');
        break;
}

