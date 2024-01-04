const db = require('../../database/models');

const controller = {
    list(req, res) {
        db.Genre.findAll()
            .then(genres => {
                const response = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: 'api/genre'
                    },
                    data: genres
                };
                res.send(response);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    create(req, res) {
        const genreToCreate = {
            name: req.body.name,
            ranking: req.body.ranking,
            active: req.body.active,
        };
        db.Genre.create(genreToCreate)
            .then(genreCreated => {
                res.status(201).send(genreCreated);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
};

module.exports = controller;