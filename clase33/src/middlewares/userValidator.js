const { body } = require('express-validator');

const userRegisterValidator = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('color').notEmpty().withMessage('El color es requerido'),
    body('email').notEmpty().withMessage('El E-mail es requerido')
        .isEmail().withMessage('Ingresa un E-mail Valido')
];

module.exports = {
    userRegisterValidator
};