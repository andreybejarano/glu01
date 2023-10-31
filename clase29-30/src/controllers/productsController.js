const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
	},

	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};

module.exports = controller;