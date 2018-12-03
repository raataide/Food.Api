'use stritct'

const mong = require('mongoose');
const schema = mong.Schema;

const categoriaModel = new schema({
    titulo:{
        trim: true,
        index: true,
        required: true,
        type: String
    },
    descricao:{
        type: String
    },
    ativo:{
        type: Boolean,
        required: true
    },
    foto:{
        type: String,
        required:true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false});

categoriaModel.pre('save', next =>{
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mong.model('categorias', categoriaModel);