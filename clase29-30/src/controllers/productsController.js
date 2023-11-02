const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const product = products.find((product) => product.id == req.params.id);
		res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: req.file?.filename || "default-image.png"
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const product = products.find((product) => product.id == req.params.id);
		res.render('product-edit-form', { productToEdit: product });
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
		// products = products.filter((product) => product.id != req.params.id);
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	}
};

module.exports = controller;