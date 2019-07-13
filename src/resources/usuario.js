require('../models/usuario');

const mongoose = require('mongoose');
const model = mongoose.model('Usuarios');
const cript = require('bcryptjs');
const salt = 10;

class Usuario {
    static async register(data) {
        let { senha } = data;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        data.senha = senha;
        return await new model(data).save();
    }

    static async registerVerify(data) {
        const { email } = data;
        const usuario = await model.findOne({email});
        return usuario;
    }

    static async loginVerification(data) {
        const { email, senha } = data;
        const usuario = await model.findOne({email}).select('+senha');
        return usuario;
    }

    static async getById(id) {
        return model.findOne({_id: id});
    }

    static async update(id, data) {
        return await model.findOneAndReplace(id, { $set: data });
    }

    static async delete(id) {
        return await model.findOneAndRemove(id);
    }
}

module.exports = Usuario;