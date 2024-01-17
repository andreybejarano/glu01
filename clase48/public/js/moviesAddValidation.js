window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------// 
    const form = document.querySelector('#formulario form');
    form.title.focus();
    const required = {
        title: true,
        rating: true,
        awards: true,
        release_date: true,
        length: true,
        genre_id: true
    };
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        for (const key in required) {
            const err = document.getElementById(`err-${key}`);
            if (required[key] && !form[key]?.value) {
                form[key].classList.add('is-invalid');
                err.classList.add('alert-warning');
                err.innerText = 'El campo es requerido';
                isValid = false;
            } else {
                form[key].classList.remove('is-invalid');
                err.classList.remove('alert-warning');
                err.innerText = '';
            }
        }
        if (isValid) {
            form.submit();
        }
    });

}