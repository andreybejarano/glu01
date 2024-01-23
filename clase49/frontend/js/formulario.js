window.onload = async () => {
    const form = document.querySelector('form.formulario');
    try {
        const params = new URLSearchParams(location.search);
        const id = params.get('movie_id');
        if (!id) {
            throw { message: '422 - El ID es Obligatorio' };
        }
        const res = await fetch(`http://localhost:3031/api/movies/${id}`);
        const movie = await res.json();
        const { data } = movie;
        if (data) {
            form.title.value = data.title;
            form.rating.value = data.rating;
            form.awards.value = data.awards;
            form.release_date.value = new Date(data.release_date).toISOString().split('T')[0];
            form.length.value = data.length;
        } else {
            throw { message: '404 - Pelicula no encontrada' };
        }
    } catch (error) {
        form.innerHTML = '';
        const h1 = document.createElement('h1');
        h1.textContent = error.message;
        form.appendChild(h1);
        console.log(error);
    }
}