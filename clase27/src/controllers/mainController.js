const controller = {
    index(req, res) {
        return res.render('index');
    },
    menuDetail(req, res) {
        return res.render('detalleMenu');
    }
}

module.exports = controller;