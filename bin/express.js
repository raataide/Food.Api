const express = require('express');
const bodyP = require('body-parser');
const mong = require('mongoose');
const variables = require('../bin/configuration/variables');

//Routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando a Api do express
const app = express();

//Configurando conexão com banco de dados
mong.connect(variables.Database.conn);

//Config Parse Json
app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: false}));

//Configurando rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//Exportando Api
module.exports = app;