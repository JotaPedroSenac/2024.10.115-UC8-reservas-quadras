const express = require('express');
const QuadraController = require('../controller/quadra.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autorizacao.middleware');
const router = express.Router();

// Rota para cadastrar uma nova reserva
router.post('/quadras', AutenticacaoMiddleware.verificarToken, AutorizacaoMiddleware.autorizar(['admin']) ,QuadraController.cadastrarQuadra);
// Rota para listar todas as reservas
router.get('/quadras', QuadraController.listarQuadras);
// Rota para buscar uma reserva por ID
router.get('/quadras/:id', QuadraController.buscarQuadraPorId);
// Rota para atualizar uma reserva existente 
router.put('/quadras/:id', AutenticacaoMiddleware.verificarToken, AutorizacaoMiddleware.autorizar(['admin']), QuadraController.atualizarQuadra);
// Rota para deletar uma reserva existente
router.delete('/quadras/:id', AutenticacaoMiddleware.verificarToken,AutorizacaoMiddleware.autorizar(['admin']), QuadraController.excluirQuadra);

module.exports = router;