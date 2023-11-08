function authAdmin(req, res, next) {
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
    const isAdmin = admins.some((element) => element.toLowerCase() === req.query.user?.toLowerCase());
    if (!isAdmin) {
        return res.status(401).send('No tienes los privilegios para ingresar');
    }
    next();
}

module.exports = authAdmin;