'use strict'

const Usuario = require('../resources/usuario');
const storage = require('node-sessionstorage');
const auth = require('../middlewares/auth');
const cript = require('bcryptjs');

// GET para render de registro
exports.getRegistro = async (req, res) => {
    try {
        return res.render('forms/registro');
    } catch(err) {
        next(err);
    }
}

// POST para registro de novos Usuarios
exports.postRegistro = async (req, res, next) => {
    const body = req.body;
    try {
        const result = await Usuario.registerVerify(body);
        if(!result) {
            await Usuario.register(body);
            return res.redirect('login');
        } else {
            return res.send('Usuario já existe na base de dados!');
        } 
    } catch(err) {
        next(err);
    }
}

// GET para render de login
exports.getLogin = (req, res) => {
    try {
        return res.render('forms/login');
    } catch (err) {
        next(err);
    }
}

// POST para login de Usuarios
exports.postLogin = async (req, res, next) => {
    const result = await Usuario.loginVerification(req.body);
    if(!result)
        return res.send('O Usuário não foi encontrado!');

    if(!await cript.compare(req.body.senha, result.senha))
        return res.send('Senha não combinam!');
    
    const token = await auth.generateToken({result});  
    storage.setItem('token', token);
    return res.redirect('/curriculo/criar');
}

// GET para logout
exports.logout = (req, res, next) => {
    try {
        storage.removeItem('login');
        return res.redirect('/');
    } catch (err) {
        next(err);
    }
}

// GET para Usuario pelo ID
exports.getById = async (req, res, next) => {
    try {
        const Usuario = await Usuario.getById(req.params.id);
        if(Usuario) {
            return res.send('Encontramos o Usuario!'); 
        } else {
            return res.send('Não conseguimos encontrar o Usuario!');
        }
    } catch (err) {
        next(err);
    }
}

// POST para atualizar Usuario na base de dados
exports.update = async (req, res, next) => {
    try {
        const Usuario = await Usuario.update(req.params.id, req.body);
        return res.json(Usuario);
    } catch(err) {
        next(err);
    }
}

// POST para exclusão de Usuario na base de dados
exports.delete = async (req, res, next) => {
    try {
        const Usuario = await Usuario.delete(req.params.id);
        return res.json(Usuario);
    } catch (err) {
        next(err);
    }
}


