'use strict'
const mong = require('mongoose');

class repoBase{
    constructor(model){
        this._model = mong.model(model);
    }

    async create(data){
        let modelo = new this._model(data);
        let result = await modelo.save();
        return result;
    }

    async update(id, data){
        await this._model.findByIdAndUpdate(id, { $set: data}) ;
        let result = await this._model.findById(id);
        return result;
    }

    async getAll(){
        return await this._model.find();
    }

    async getById(id){
        return await this._model.findById(id);
    }
    async delete(id){
        return await this._model.findByIdAndDelete(id);
    }
}

module.exports = repoBase;