'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nomeCompleto: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuarios'
    },
    telefone: [{
        type: Number,
        required: true
    }],
    idade: {
        type: Number,
        requried: true
    },
    habilitação: {
        type: String,
    },
    endereco: {
        numero: {
            type: Number
        },
        bloco: {
            type: String
        },
        rua: {
            type: String,
            required: true,
            trim: true
        },
        bairro: {
            type: String,
            required: true,
            trim: true
        },
        cidade: {
            type: String,
            required: true,
            trim: true
        },
        estado: {
            type: String,
            required: true,
            trim: true
        }
    },
    objetivo: {
        type: String,
        required: true,
        trim: true
    },
    educacao: {
        type: String,
        required: true,
        trim: true
    },
    cursos: [{
        tituloCurso: {
            type: String,
            trim: true
        },
        descricaoCurso: {
            type: String,
            trim: true
        },
        instituicao: {
            type: String,
            trim: true
        },
        inicioCurso: {
            type: String,
            trim: true
        },
        fimCurso: {
            type: String,
            trim: true
        }
    }],
    experiencias: [{
        empresa: {
            type: String,
            trim: true
        },
        cargo: {
            type: String,
            trim: true
        },
        entrada: {
            type: String,
            trim: true
        },
        saida: {
            type: String,
            trim: true
        },
        descricaoCargo: {
            type: String,
            trim: true
        }
    }],
    certificados: [{
        tituloCertificado: {
            type: String,
            trim: true
        },
        dataExpedicao: {
            type: String,
            trim: true
        }, 
        descricaoCertificado: {
            type: String,
            trim: true 
        }
    }]
});

module.exports = mongoose.model('Curriculos', schema);
