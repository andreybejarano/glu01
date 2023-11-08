const controller = {
    index(req, res) {
        res.render('admin', { user: req.query.user });
    }
}

module.exports = controller;