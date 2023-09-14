const express = require('express');
const path = require('path');

// Inicializo o instanceo express un servidor web usando express.js
const app = express();

// Usar como carpeta de estaticos src/public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/berners-lee.html'));
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/clarke.html'));
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/hamilton.html'));
});

app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/hopper.html'));
});

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/turing.html'));
});

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
