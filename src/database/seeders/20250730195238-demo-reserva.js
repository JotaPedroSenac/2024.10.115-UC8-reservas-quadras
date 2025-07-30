'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reserva', [
      {
        quadra_id: 1,
        usuario_id: 6, // João Silva
        data_reserva: new Date('2025-08-01'),
        hora_inicio: '10:00',
        hora_fim: '11:00',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        quadra_id: 2,
        usuario_id: 7, // Maria Oliveira
        data_reserva: new Date('2025-08-02'),
        hora_inicio: '14:00',
        hora_fim: '15:30',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        quadra_id: 3,
        usuario_id: 9, // Ana Souza
        data_reserva: new Date('2025-08-03'),
        hora_inicio: '09:00',
        hora_fim: '10:30',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reserva', null, {});
  }
};