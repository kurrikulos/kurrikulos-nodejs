require('../models/curriculo');

const mongoose = require('mongoose');
const model = mongoose.model('Curriculos');

class Curriculo {
    static async criar(data) {
        return await new model(data).save();
    }

    static async atualiar(data, id) {
        return await model.findOneAndReplace(id, { $set: data });
    }

    static async buscarID(id) {
        return model.findOne({_id: id});
    }

    static async buscaTodos(id) {
        // verifico se id do usuario logado é o mesmo id passado para o relacionamento
        const result = await model.find({email: id}).populate('email', 'email');
        if(!result)
            // caso NAO, retorna false
            return false;
        // havendo, ele me retorna as collections
        return result;
    }

    static async delete(id) {
        return await model.findOneAndRemove(id);
    }
}

module.exports = Curriculo;
