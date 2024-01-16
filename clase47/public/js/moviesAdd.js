window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        const colors = ['red', 'blue', 'green', 'gray', 'black', 'tea'];
        const index = Math.floor(Math.random() * colors.length);
        titulo.style.color = colors[index];
    });
    // Este seria el indice dentro de el string secret
    let estadoSecreto = 0;
    const txfTitulo = document.getElementById('titulo');
    txfTitulo.addEventListener('keypress', (event) => {
        const secret = 'secreto';
        if (secret[estadoSecreto] === event.key) {
            estadoSecreto++;
        } else {
            estadoSecreto = 0;
        }
        if (estadoSecreto === secret.length) {
            estadoSecreto = 0;
            alert('SECRETO MAGICO');
        }
        // switch (event.key) {
        //     case 's':
        //         estadoSecreto++;
        //         break;
        //     case 'e':
        //         estadoSecreto++;
        //         break;
        //     case 'c':
        //         estadoSecreto++;
        //         break;
        //     case 'r':
        //         estadoSecreto++;
        //         break;
        //     case 'e':
        //         estadoSecreto++;
        //         break;
        //     case 't':
        //         estadoSecreto++;
        //         break;
        //     case 'o':
        //         if (estadoSecreto >= 6) {
        //             alert('SECRETO MAGICO');
        //         }
        //         estadoSecreto = 0;
        //         break;
        //     default:
        //         estadoSecreto = 0;
        //         break;
        // }
    });
}