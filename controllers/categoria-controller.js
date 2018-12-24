'use strict'

const repo = require('../repositories/categoria-repository');
const ctrlBase = require('../bin/base/controllerBase');
const validation = require('../bin/helpers/validation');
const _repo = new repo();


function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'Título é obrigatório.');
    _validationContract.isRequired(req.body.foto, 'Foto é obrigatória.');

    ctrlBase.post(_repo, _validationContract, req, res);    
};

categoriaController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'Título é obrigatório.');
    _validationContract.isRequired(req.body.foto, 'Foto é obrigatória.');
    _validationContract.isRequired(req.body.params.id, 'Informe a categoria a ser atualizada.');

    ctrlBase.put(_repo, _validationContract, req, res); 
};

categoriaController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;