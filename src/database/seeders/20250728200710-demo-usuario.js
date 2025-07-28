'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const senhaHash = await bcrypt.hash('Senha@123', 10);
    await queryInterface.bulkInsert('usuario', [
      {
        nome: 'João Silva',
        papel: 'aluno',
        email: 'joao@example.com',
        senha: senhaHash,
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Maria Oliveira',
        papel: 'funcionario',
        email: 'maria@example.com',
        senha: senhaHash,
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Carlos Pereira',
        papel: 'admin',
        email: 'carlos@example.com',
        senha: senhaHash,
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Ana Souza',
        papel: 'aluno',
        email: 'ana@example.com',
        senha: senhaHash,
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Roberta Lima',
        papel: 'funcionario',
        email: 'roberta@example.com',
        senha: senhaHash,
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
