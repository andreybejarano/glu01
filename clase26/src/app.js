const express = require('express');
const path = require('path');

const mainRoutes = require('./routers/main');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
