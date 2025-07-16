const express = require('express');
const ReservaController = require('../controller/reserva.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autorizacao.middleware');
const router = express.Router();

// Rota para cadastrar uma nova reserva
router.post('/reservas', AutenticacaoMiddleware.verificarToken, AutorizacaoMiddleware.autorizar(['admin', 'funcionario']) ,ReservaController.cadastrarReserva);
// Rota para listar todas as reservas
router.get('/reservas', AutenticacaoMiddleware.verificarToken, ReservaController.listarReservas);
// Rota para buscar uma reserva por ID
router.get('/reservas/:id', AutenticacaoMiddleware.verificarToken, ReservaController.buscarReservaPorId);
// Rota para atualizar uma reserva existente 
router.put('/reservas/:id', AutenticacaoMiddleware.verificarToken, AutorizacaoMiddleware.autorizar(['admin', 'funcionario']), ReservaController.atualizarReserva);
// Rota para deletar uma reserva existente
router.delete('/reservas/:id', AutenticacaoMiddleware.verificarToken, AutorizacaoMiddleware.autorizar(['admin', 'funcionario']), ReservaController.excluirReserva);

module.exports = router;