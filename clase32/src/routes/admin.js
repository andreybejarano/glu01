const express = require('express');

const adminController = require('../controllers/adminController');

const authAdminMiddleware = require('../middlewares/authAdmin');

const router = express.Router();

router.get('/', authAdminMiddleware, adminController.index);

module.exports = router;