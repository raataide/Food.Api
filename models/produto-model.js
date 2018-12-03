'use strict'

const mong = require('mongoose');
const schema = mong.Schema;

const produtoModel = new schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    descricao:{
        type: String,
        required: true
    },
    ativo:{        
        type: Boolean,
        required: true
    },
    dataCriacao:{
        type: Date,
        required: true,
        default: Date.now
    },
    preco:{
        type: Number,
        required: true
    },
    foto:{
        type: String,
        required: true
    }
}, {versionKey: false});

produtoModel.pre('save', next=>{
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mong.model('produtos', produtoModel);