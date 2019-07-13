'use strict'

const express = require('express');
const bodyp = require('body-parser');

// criando app
const app = express();

// configurando parse
app.use(bodyp.json({limit: '5mb'}));
app.use(bodyp.urlencoded({extended: false}));

// definindo template engine e local publico dos arquivos
app.set('view engine', 'ejs');
app.set('views', 'views');

// definindo statics
app.use(express.static('public'));


const r_usuario = require('../src/routes/usuario'); // rota de usuarios
const r_curriculo = require('../src/routes/curriculo'); // rota de curriculos

app.use('/usuario', r_usuario);
app.use('/curriculo', r_curriculo);

// rota principal
app.use('/', (req, res, next) => {
    return res.send('Bem vind@');
});

// tratamento para demais erros
app.use((err, req, res, next) => {
    const message = err.message;
    res.send(message);
});

module.exports = app;
