const express = require('express');
const UsuarioController = require('../controller/usuario.controller');

const router = express.Router();

// Rota para cadastrar um novo usuário
router.post('/usuarios', UsuarioController.cadastrarUsuario);
// Rota para listar todos os usuários
router.get('/usuarios', UsuarioController.listarUsuarios);  
// Rota para buscar um usuário por ID
router.get('/usuarios/:id', UsuarioController.buscarUsuarioPorId);
// Rota para atualizar um usuário existente
router.put('/usuarios/:id', UsuarioController.atualizarUsuario);
// Rota para deletar um usuário existente
router.delete('/usuarios/:id', UsuarioController.excluirUsuario);

module.exports = router;