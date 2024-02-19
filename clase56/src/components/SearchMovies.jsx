import React from 'react'

function SearchMovies() {

    const [movies, setMovies] = React.useState([])
    const [keyword, setKeyword] = React.useState('garfield')
    const txtSearch = React.useRef()

    // Credenciales de API
    const apiKey = '7581f363' // Intenta poner cualquier cosa antes para probar

    React.useEffect(() => {
        // Esto es equivalente al componentDidMount en componentes de clase, recive de segundo argumento un array vacio
        fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search ? data.Search : [])
            })
            .catch(err => { console.log(err) })
    }, [])

    React.useEffect(() => {
        // Este es equivalente a componentDidUpdate en componentes de clase, de segundo argumento se le pasa un array 
        // con las propidades q disparan el callback
        if (keyword.length >= 3) {
            fetch(`http://www.omdbapi.com/?s=${txtSearch.current.value}&apikey=${apiKey}`)
                .then(res => res.json())
                .then(data => {
                    setMovies(data.Search ? data.Search : [])
                })
                .catch(err => { console.log(err) })
        }
    }, [keyword])

    const handleSearch = React.useCallback((e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?s=${txtSearch.current.value}&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search ? data.Search : [])
            })
            .catch(err => { console.log(err) })
    }, [movies])

    const onChange = React.useCallback((e) => {
        setKeyword(e.target.value)
    }, [keyword])

    return (
        <div className="container-fluid">
            {
                apiKey !== '' ?
                    <>
                        <div className="row my-4">
                            <div className="col-12 col-md-6">
                                {/* Buscador */}
                                <form method="GET" onSubmit={handleSearch}>
                                    <div className="form-group">
                                        <label htmlFor="">Buscar por título:</label>
                                        <input type="text" className="form-control" ref={txtSearch} onChange={onChange} />
                                    </div>
                                    <button className="btn btn-info">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Películas para la palabra: {keyword}</h2>
                            </div>
                            {/* Listado de películas */}
                            {
                                movies.length > 0 && movies.map((movie, i) => {
                                    return (
                                        <div className="col-sm-6 col-md-3 my-4" key={i}>
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <img
                                                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                            src={movie.Poster}
                                                            alt={movie.Title}
                                                            style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <p>{movie.Year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
                    </>
                    :
                    <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
            }
        </div>
    )
}

export default SearchMovies
