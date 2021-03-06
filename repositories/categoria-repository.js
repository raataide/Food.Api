require('../models/categoria-model');
const repoB = require('../bin/base/repoBase');

class categoriaRepository{
    constructor(){
        this._base = new repoB('categorias');
    }

    async create(data){
        return await this._base.create(data);        
    }

    async update(id, data){
        return await this._base.update.findByIdAndUpdate(id, { $set: data}) ;        
    }

    async getAll(){
        return await this._base.getAll();
    }

    async getById(id){
        return await this._base.getById(id);
    }
    async delete(id){
        return await this._base.delete(id);
    }
}

module.exports = categoriaRepository;