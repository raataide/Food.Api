'use strict'

require('../models/categoria-model');
const mong = require('mongoose');
const categoria = mong.model('categorias');
const repo = require('../repositories/categoria-repository');

function categoriaController(){

}

categoriaController.prototype.post = async (req,res) =>{ 
    let result = await new repo().create(req.body);
    res.status(201).send(result);
};

categoriaController.prototype.put = async (req,res) =>{ 
    await categoria.findByIdAndUpdate(req.params.id, {$set: req.body});
    let catEncontrada = await categoria.findById(req.params.id);
    res.status(202).send(catEncontrada);
};

categoriaController.prototype.get = async (req,res) =>{ 
    let lista = await categoria.find();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async (req,res) =>{ 
    let catEncontrada = await categoria.findById(req.params.id);
    res.status(202).send(catEncontrada);
};

categoriaController.prototype.delete = async (req,res) =>{ 

    let deletado = await categoria.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;