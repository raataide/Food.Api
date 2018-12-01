const express = require('express');
const bodyP = require('body-parser');

//Routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando a Api do express
const app = express();

//Config Parse Json
app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: false}));

//Configurando rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//Exportando Api
module.exports = app;