import MovieList from './MovieList';

const movies = [
    {
        id: 1,
        title: 'Titulo pelicula',
        rating: 2,
        awards: 3,
        length: 4,
    },
    {
        id: 2,
        title: 'Titulo pelicula2',
        rating: 4,
        awards: 5,
        length: 6,
    }
];

function Movie() {
    return (
        <>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the movies in the Database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie, index) =>
                                    <MovieList  {...movie} key={index} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movie;