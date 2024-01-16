window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    const logo = document.querySelector('figure');
    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    }
    
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';
    logo.addEventListener('mouseenter', () => {
        if (body.style.backgroundColor === '') {
            body.style.backgroundColor = '#7f7f7f';
        } else {
            body.style.backgroundColor = '';
        }
        body.classList.toggle('fondoMoviesList');
    });
}