require('../models/categoria-model');
const mong = require('mongoose');
const categoriaModel = mong.model('categorias');

class categoriaRepository{
    constructor(){

    }

    async create(data){
        let cat = new categoriaModel(data);
        let result = await cat.save();
        return result;
    }
}

module.exports = categoriaRepository;