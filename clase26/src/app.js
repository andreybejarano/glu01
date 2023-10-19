const express = require('express');
const path = require('path');

const mainRoutes = require('./routers/main');
const userRoutes = require('./routers/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);
app.use('/user', userRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
