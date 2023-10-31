// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
// router.???('/???/', productsController.create); 
// router.???('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
// router.???('/:id/???', productsController.edit); 
// router.???('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
// router.???('/:id', productsController.destroy); 


module.exports = router;
