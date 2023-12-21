const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const API = 'http://www.omdbapi.com/?apikey=7581f363';

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include: ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', { movie });
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    },
    //Aqui debo modificar para crear la funcionalidad requerida
    'buscar': async (req, res) => {
        try {
            let movies = await db.Movie.findAll({ where: { title: { [Op.like]: `%${req.body.titulo}%` } } });
            if (movies.length === 0) {
                const moviesToCreate = [];
                const response = await fetch(`${API}&type=movie&s=${req.body.titulo}`);
                const data = await response.json();
                if (data.Search) {
                    for (let index = 0; index < data.Search.length; index++) {
                        const element = data.Search[index];
                        const responseMovie = await fetch(`${API}&i=${element.imdbID}`);
                        const dataMovie = await responseMovie.json();
                        const regex = /(\d+)/g;
                        const awards = dataMovie.Awards.match(regex).reduce((acc, current) => acc + Number(current), 0);
                        const released = moment(dataMovie.Released).toISOString();
                        const length = dataMovie.Runtime.match(regex);
                        const movie = {
                            title: dataMovie.Title,
                            rating: dataMovie.imdbRating,
                            awards: awards,
                            release_date: released,
                            length: length
                        }
                        moviesToCreate.push(movie);
                    }
                    movies = await db.Movie.bulkCreate(moviesToCreate);
                }
            }
            res.render('moviesList', { movies });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();

        Promise
            .all([promGenres, promActors])
            .then(([allGenres, allActors]) => {
                return res.render(path.resolve(__dirname, '..', 'views', 'moviesAdd'), { allGenres, allActors })
            })
            .catch(error => res.send(error))
    },
    create: function (req, res) {
        Movies
            .create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    },
    edit: function (req, res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId, { include: ['genre', 'actors'] });
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        Promise
            .all([promMovies, promGenres, promActors])
            .then(([Movie, allGenres, allActors]) => {
                Movie.release_date = moment(Movie.release_date).format('L');
                return res.render(path.resolve(__dirname, '..', 'views', 'moviesEdit'), { Movie, allGenres, allActors })
            })
            .catch(error => res.send(error))
    },
    update: function (req, res) {
        let movieId = req.params.id;
        Movies
            .update(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                },
                {
                    where: { id: movieId }
                })
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    },
    delete: function (req, res) {
        let movieId = req.params.id;
        Movies
            .findByPk(movieId)
            .then(Movie => {
                return res.render(path.resolve(__dirname, '..', 'views', 'moviesDelete'), { Movie })
            })
            .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let movieId = req.params.id;
        Movies
            .destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    }
}

module.exports = moviesController;