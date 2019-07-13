'use strict'

const Curriculo = require('../resources/curriculo');
const auth = require('../middlewares/auth');
const storage = require('node-sessionstorage');

// GET para criar
exports.getCriar = async (req, res, next) => {
    try {
        // pegando o id do usuario logado
        const token = await storage.getItem('token')
        const decode = await auth.decoded(token);
        const id = decode.result['_id'];

        // passo o ID para o input da view criar.ejs
        return res.render('curriculo/criar', { user: id});
    } catch (err) {
        next(err);
    }
}

// POST para criar
exports.postCriar = async (req, res, next) => {
    try {
        const curriculo = await Curriculo.criar(req.body);
        return res.json(curriculo);
    } catch (err) {
        next(err);
    }
}

// GET para buscarTodos
exports.buscarTodos = async (req, res, next) => {
    try {
        // pegando o id do usuario logado
        const token = await storage.getItem('token')
        const decode = await auth.decoded(token);
        const id = decode.result['_id'];
        // invoco meu resource CURRICULOS
        const result = await Curriculo.buscaTodos(id);
        // se o meu resource retornar FALSE
        if(result == false) {
            // retorno mensagem informativa
            return res.send('Você não possue currículos cadastrados!');        
        }
        // se existe, trago somente curriculos com o id cadastrado
        return res.send(result);
    } catch (err) {
        return next(err);
    }
}
