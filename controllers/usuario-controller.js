'use strict'

const repo = require('../repositories/usuario-repository');
const ctrlBase = require('../bin/base/controllerBase');
const validation = require('../bin/helpers/validation');
const _repo = new repo();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

function usuarioController(){
    
}

usuarioController.prototype.post = async (req,res) =>{ 
    let _validation = new validation();
    
    _validation.isRequired(req.body.email, 'Informe seu e-mail.');    
    _validation.isEmail(req.body.email, 'E-mail informado é inválido.');
    _validation.isRequired(req.body.nome, 'Informe o nome.');
    _validation.isRequired(req.body.senha, 'A senha é obrigatória.');
    _validation.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação não foi informada.');
    _validation.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha e a confirmação não são iguais.');
    
    let usuarioExiste = await _repo.emailExiste(req.body.email);
    if (usuarioExiste){
        _validation.isTrue(usuarioExiste.email != undefined, `E-mail ${req.body.email} já cadastrado no sistema.`);
    }

    req.body.senha = md5(req.body.senha);
    

    ctrlBase.post(_repo, _validation, req, res);    
}

usuarioController.prototype.put = async (req,res) =>{ 
    let _validation = new validation();
    
    _validation.isRequired(req.body.email, 'Informe seu e-mail.');
    _validation.isEmail(req.body.email, 'E-mail informado é inválido.');
    _validation.isRequired(req.body.nome, 'Informe o nome.');
    _validation.isRequired(req.params.id, 'Informe o ID do usuário que será atualizado.');

    let usuarioExiste = await _repo.emailExiste(req.body.email);
    if (usuarioExiste){
        _validation.isTrue((usuarioExiste.email != undefined) && (usuarioExiste._id != req.params.id), `E-mail ${req.body.email} já cadastrado no sistema.`);
    }

    ctrlBase.put(_repo, _validation, req, res);
}

usuarioController.prototype.get = async (req,res) =>{     
    ctrlBase.get(_repo, req, res);
}

usuarioController.prototype.getById = async (req,res) =>{ 
    ctrlBase.getById(_repo, req, res);
}

usuarioController.prototype.delete = async (req,res) =>{ 
    ctrlBase.delete(_repo, req, res);
}

usuarioController.prototype.autenticar = async (req,res) =>{
    let _validation = new validation();
    _validation.isRequired(req.body.email, 'Informe seu e-mail.');    
    _validation.isEmail(req.body.email, 'E-mail informado é inválido.');
    _validation.isRequired(req.body.senha, 'A senha é obrigatória.');

    if (!_validation.isValid()){
        res.status(400).send({message: 'Não foi possível efetuar o login.', validation: _validation.errors()})
        return;
    }
    

    let usuarioEncontrado = await _repo.auth(req.body.email, req.body.senha);
    
    if(usuarioEncontrado){
        res.status(200).send({
            usuario: usuarioEncontrado,
            token: jwt.sign({usuarioEncontrado}, variables.Security.secretKey)
        })
    } else {
        res.status(404).send({message: 'Usuário e senha informado são inválidos.'});
    }
}

module.exports = usuarioController;