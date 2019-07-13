'use strict'

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    },
    email: {
        trim: true,
        required: [true, 'o e-mail é obrigatório'],
        unique: true,
        lowercase: true,
        type: String
    },
    senha: {
        trim: true,
        required: true,
        type: String,
        select: false
    }
});

module.exports = mongoose.model('Usuarios', schema);