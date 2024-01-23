const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//Aquí llamo a la ruta de las api de movies
const apiMoviesRouter = require('./routes/api/movies')
//Aquí llamo a la ruta de las api de actors
const apiGenresRouter = require('./routes/api/genres')
//Aquí llamo a la ruta de las api de actors
const apiActorsRouter = require('./routes/api/actors')


app.use(express.static(path.resolve(__dirname, '../public')));


//Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);


//Activando el servidor desde express
app.listen('3031', () => console.log('Servidor corriendo en el puerto 3031'));
