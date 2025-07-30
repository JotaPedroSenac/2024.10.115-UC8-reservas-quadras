'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('quadra', [
      {
        quadra_nome: 'Quadra 1',
        tipo: 'Futsal',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        quadra_nome: 'Quadra 2',
        tipo: 'Volei',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        quadra_nome: 'Quadra 3',
        tipo: 'Tenis',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quadra', null, {});
  }
};
