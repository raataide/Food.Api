require('../models/usuario-model');
const repoB = require('../bin/base/repoBase');
const md5 = require('md5');

class usuarioRepository{
    constructor(){
        this._base = new repoB('usuarios');
        this._projec = 'nome email _id';
    }

    async create(data){
        let  usuario =  await this._base.create(data);        
        return this._base._model.findById(usuario._id, this._projec)
    }

    async update(id, data){
        let usuario =  await this._base.update(id, {
            nome: data.nome,
            email: data.email,
            foto: data.foto,
            ativo: data.ativo
        });
        return this._base._model.findById(usuario._id, this._projec)
    }

    async getAll(){
        return await this._base._model.find({},this._projec);
    }

    async getById(id){
        return await this._base.findById(id, 'nome email _id foto');
    }
    async delete(id){
        return await this._base.delete(id);
    }

    async auth(Email, Senha){
        let _hashSenha = md5(Senha);
        return await this._base._model.findOne({email: Email, senha: _hashSenha}, this._projec);
    }

    async emailExiste(Email){
        return await this._base._model.findOne({email: Email}, this._projec);

    }
}

module.exports = usuarioRepository;