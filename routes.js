const express = require('express');
const enderecoController = require('./controller/enderecoController');

const router = express.Router();

router.post('/enderecos', enderecoController.createEndereco);
router.get('/enderecos', enderecoController.getAllEnderecos);
router.get('/enderecos/:Id', enderecoController.getEnderecoById);
router.put('/enderecos/:Id', enderecoController.updateEndereco);
router.get('/enderecos/:Id', enderecoController.deleteEndereco);

module.exports = router;