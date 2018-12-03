require('../models/produto-model');
const repoB = require('../bin/base/repoBase');

class produtoRepository{
    constructor(){
        this._base = new repoB('produtos');
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

module.exports = produtoRepository;