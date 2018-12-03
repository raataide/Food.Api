'use strict'

require('../models/categoria-model');
const repo = require('../repositories/categoria-repository');

function categoriaController(){

}

categoriaController.prototype.post = async (req,res) =>{ 
    let result = await new repo().create(req.body);
    res.status(201).send(result);
};

categoriaController.prototype.put = async (req,res) =>{ 
    let result = await new repo().update(req.params.id, req.body);    
    res.status(202).send(result);
};

categoriaController.prototype.get = async (req,res) =>{ 
    let lista = await new repo().getAll();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async (req,res) =>{ 
    let catEncontrada = await new repo().getById(req.params.id);
    res.status(202).send(catEncontrada);
};

categoriaController.prototype.delete = async (req,res) =>{ 

    let deletado = await new repo().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;