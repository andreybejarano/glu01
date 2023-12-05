const { Op } = require("sequelize");

const db = require('../database/models');

const controller = {
    list(req, res) {
        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', { movies });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    async detail(req, res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            return res.render('moviesDetail', { movie });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async new(req, res) {
        try {
            const movies = await db.Movie.findAll({
                order: [
                    ['release_date', 'desc']
                ]
            });
            return res.render('newestMovies', { movies });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    async recomended(req, res) {
        try {
            const movies = await db.Movie.findAll({
                order: [
                    ['release_date', 'desc']
                ],
                where: {
                    rating: {
                        [Op.gte]: 7.3
                    }    
                },
                limit: 5
            });
            return res.render('newestMovies', { movies });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = controller;