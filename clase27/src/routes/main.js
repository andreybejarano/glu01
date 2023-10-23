const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/menu-detail', mainController.menuDetail);

module.exports = router;