const fs = require('fs');
const path = require('path');

function userLogs(req, res, next) {
    const message = `El usuario ingresó a la ruta: ${req.url} - ${Date.now()}\n`;
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'), message);
    next();
}

module.exports = userLogs;