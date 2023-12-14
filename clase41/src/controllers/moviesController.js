const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({ include: ['genre', 'actors'] })
            .then(movies => {
                res.render('moviesList.ejs', { movies });
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
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
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        db.Genre.findAll()
            .then((genres) => {
                res.render('moviesAdd', { allGenres: genres });
            })
            .catch((err) => {
                res.send(err);
            });
    },
    create: function (req, res) {
        db.Movie.create(req.body)
            .then(() => {
                res.redirect('/movies');
            })
            .catch((err) => {
                res.send(err);
            });
    },
    edit: async function (req, res) {
        try {
            const movie = await  db.Movie.findByPk(req.params.id);
            const genres = await db.Genre.findAll();
            res.render('moviesEdit', { Movie: movie, allGenres: genres });
        } catch (error) {
            res.send(err);
        }   
    },
    update: function (req, res) {

    },
    delete: function (req, res) {
        // Aqui harian el metodo de destroy de sequelize y redirigir a /movies
    },
    destroy: function (req, res) {

    }
}

module.exports = moviesController;