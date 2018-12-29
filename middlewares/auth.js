const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

module.exports = async (req,res,next) => {
    let token = req.body.token || req.query.query || req.headers['x-access-token'] || req.headers.authorization;
    
    const parts = token.split(' ');
    if (parts.length === 2){
        token = token.replace('Bearer ' , '');
    }

    if (token){        
        try {
            let decoded = await jwt.verify(token, variables.Security.secretKey);
            

            req.usuarioLogadoo = decoded;
            next();
        } catch (error) {
            res.status(401).send({message: 'Token inválido.'});
            return;
        }
    } else {
        res.status(401).send({message: 'Você precisa informar o token.'});
        return;
    }
}