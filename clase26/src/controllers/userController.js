const controller = {
    login(req, res) {
        res.send('Login');
    },
    register(req, res) {
        res.send('Register');
    },
    profile(req, res) {
        res.send(`Profile ${req.params.userId}`);
    } 
};

module.exports = controller;