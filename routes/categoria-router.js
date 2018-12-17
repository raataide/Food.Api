'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const controller = require('../controllers/categoria-controller')

const ctrl = new controller();

router.get('/',auth, ctrl.get);
router.get('/:id', auth, ctrl.getById);
router.post('/', auth, ctrl.post);
router.put('/:id', auth, ctrl.put);
router.delete('/:id', auth, ctrl.delete);

module.exports = router;