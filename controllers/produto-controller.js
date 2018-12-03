'use strict'

require('../models/produto-model');
const repo = require('../repositories/produto-repository');

function produtoController(){

}

produtoController.prototype.post = async (req,res) =>{ 
    let result = await new repo().create(req.body) ;
    res.status(200).send(result);
}
produtoController.prototype.put = async (req,res) =>{ 
    let result = await new repo().update(req.params.id, req.body);
    res.status(202).send(result);
}
produtoController.prototype.get = async (req,res) =>{ 
    let lista = await new repo().getAll();
    res.status(200).send(lista);
}
produtoController.prototype.getById = async (req,res) =>{ 
    let prod = await new repo().getById(id);
    res.status(200).send(prod);
}
produtoController.prototype.delete = async (req,res) =>{ 
    let result = await new repo().delete(req.params.id);
    res.status(204).send(result);
}

module.exports = produtoController;