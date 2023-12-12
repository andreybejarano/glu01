const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
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
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        // TODO   
        res.render('moviesAdd');
    },
    create: function (req, res) {
        // TODO
        db.Movie.create(req.body)
            .then(() => {
                res.redirect('/movies');
            })
            .catch((err) => {
                res.send(err);
            });
    },
    edit: function (req, res) {
        // TODO
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                res.render('moviesEdit', { Movie: movie });
            })
            .catch((err) => {
                res.send(err);
            });
    },
    update: function (req, res) {
        // TODO
        db.Movie.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                res.redirect('/movies');
            })
            .catch((err) => {
                res.send(err);
            });
    },
    delete: function (req, res) {
        // TODO
        db.Movie.destroy({ where: { id: req.params.id} })
            .then(() => {
                res.redirect('/movies');
            })
            .catch((err) => {
                res.send(err);
            });
    },
    destroy: function (req, res) {
        // TODO
    }

}

module.exports = moviesController;