// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-product${ext}`;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage })

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/create', upload.single('image'), productsController.store);


/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.edit); 
router.put('/:id/edit', productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/:id/delete', productsController.destroy);


module.exports = router;
