const productModel = require('../models/product');

const controller = {
    index(req, res) {
        const products = productModel.getProducts();
        return res.render('index', { products });
    },
    menuDetail(req, res) {
        const product = productModel.getProductById(req.params.id);
        return res.render('detalleMenu', { product });
    }
}

module.exports = controller;