const express = require('express');
const router = express.Router()
const AutenticacaoController = require('../controller/autenticacao.controller')
// rota publica de login
router.post('/usuarios/login', AutenticacaoController.login);
// rota para sair 
router.post('/usuarios/logout', AutenticacaoController.sair);

// rota usada pelo navegador para atualizar o token 
router.post('/refress-token', AutenticacaoController.gerarRefreshToken);


module.exports = router