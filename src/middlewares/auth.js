'use strict'

const storage = require('node-sessionstorage');
const jwt = require('jsonwebtoken');

module.exports.authorize = async (req, res, next) => {
    try {
        const data = await storage.getItem('token');
        if(!data) {
            return res.send('Permissão negada!');
        }
        return next();
    } catch (err) {
        next(err);
    }
}

module.exports.generateToken = async (data) => {
    return await jwt.sign(data, 'secretkey');
}

module.exports.decoded = async (token) => {
    const data = await jwt.decode(token, 'secretkey');
    return data;
}


