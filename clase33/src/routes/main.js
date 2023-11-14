const express = require('express');

const mainController = require('../controllers/mainController');

const { userRegisterValidator } = require('../middlewares/userValidator');

const router = express.Router();

router.get('/', mainController.index);
router.post('/', userRegisterValidator, mainController.register);
router.get('/profile', mainController.profile);
router.get('/logout', mainController.logout);

module.exports = router;