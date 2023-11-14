const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: '12345678'
}));
app.use(cookieParser());

app.use('/', mainRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
});