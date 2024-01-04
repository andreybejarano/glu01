const express = require('express');

const genresController = require('../../controllers/api/genresController');

const router = express.Router();

router.get('/', genresController.list);
router.post('/', genresController.create);

module.exports = router;