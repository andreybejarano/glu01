const db = require('../database/models/index');

const controller = {
    async index(req, res) {
        try {
            const users = await db.User.findAll({include: ['role']});
            return res.render('index', { users });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
module.exports = controller;