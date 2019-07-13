'use strict'

const _USUARIO = require('../controllers/usuario');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/registro', _USUARIO.getRegistro);
router.get('/login', _USUARIO.getLogin);
router.get('/logout', auth.authorize, _USUARIO.logout);
router.get('/edit/:id', auth.authorize, _USUARIO.getById);

router.post('/registro', _USUARIO.postRegistro);
router.post('/login', _USUARIO.postLogin);
router.post('/edit', auth.authorize, _USUARIO.update);
router.post('/update/:id', auth.authorize, _USUARIO.update);
router.post('/delete/:id', auth.authorize, _USUARIO.delete);

module.exports = router;
