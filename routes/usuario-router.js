'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuario-controller')
const auth = require('../middlewares/auth');

const ctrl = new controller();

router.get('/',auth, ctrl.get);
router.get('/:id', auth, ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', auth, ctrl.put);
router.delete('/:id', auth, ctrl.delete);
router.post('/autenticar', ctrl.autenticar);

module.exports = router;