'use strict'

const app = require('../Food.Api/bin/express');
const variables = require('../Food.Api/bin/configuration/variables');


app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});