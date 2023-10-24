const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

function getProductById(id) {
    const products = getProducts();
    const product = products.find((product) => product.id == id);
    return product;
}

module.exports = {
    getProducts,
    getProductById
}