const main = document.querySelector('main');
const h2 = document.querySelector('h2.subtitulo');
const link = document.querySelector('h2 a');
const p = document.querySelectorAll('p');

const name = prompt('Ingrese su nombre');

if (!name) {
    h2.innerHTML += ' Invitado';
} else {
    h2.innerHTML += ` ${name}`;
}

h2.style.textTransform = 'uppercase';

link.style.color = '#E51B3E';

const background = confirm('¿Desea colocar un fondo de pantalla?');

if (background) {
    document.body.classList.add('fondo');
}

p.forEach((element, index) => {
    if ((index + 1) % 2 === 0) {
        element.classList.add('destacadoPar');
    } else {
        element.classList.add('destacadoImpar');
    }
});

main.style.display = 'block';