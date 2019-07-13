'use strict'

const _CURRICULO = require('../controllers/curriculo');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth.authorize, _CURRICULO.buscarTodos);
router.get('/criar', _CURRICULO.getCriar);
router.post('/criar', _CURRICULO.postCriar);

module.exports = router;
