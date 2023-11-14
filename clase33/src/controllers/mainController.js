const { validationResult } = require('express-validator')

const controller = {
    index(req, res) {
        const user = req.session.user;
        if (user && !req.cookies['color-selected']) {
            delete user.color;
        }
        return res.render('index', { user });
    },
    register(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('index', { errors: errors.mapped(), oldData: req.body })
        }
        const user = req.body;
        if (user.rememberColor) {
            res.cookie('color-selected', user.color);
        }
        req.session.user = user;
        return res.redirect('/profile');
    },
    profile(req, res) {
        const user = req.session.user;
        if (!user) {
            return res.send('Usuario no logeado');
        }
        return res.render('profile', { user });
    },
    logout(req, res) {
        delete req.session.user;
        res.clearCookie('color-selected');
        return res.redirect('/');
    }
}

module.exports = controller;