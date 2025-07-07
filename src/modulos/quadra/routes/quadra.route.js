const express = require('express');
const QuadraController = require('../controller/quadra.controller');
const AutenticacaoMiddleware = require('../../usuario/middleware/usuario.autenticacao');
const router = express.Router();

// Rota para cadastrar uma nova reserva
router.post('/quadras', AutenticacaoMiddleware.verificarToken,QuadraController.cadastrarReserva);
// Rota para listar todas as reservas
router.get('/quadras', QuadraController.listarReservas);
// Rota para buscar uma reserva por ID
router.get('/quadras/:id', QuadraController.buscarReservaPorId);
// Rota para atualizar uma reserva existente 
router.put('/quadras/:id', AutenticacaoMiddleware.verificarToken, QuadraController.atualizarReserva);
// Rota para deletar uma reserva existente
router.delete('/quadras/:id', AutenticacaoMiddleware.verificarToken,QuadraController.excluirReserva);

module.exports = router;