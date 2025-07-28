'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reserva', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quadra_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: Quadra, key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: Usuario, key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      data_reserva: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hora_inicio: {
        type: Sequelize.TIME,
        allowNull: false
      },
      hora_fim: {
        type: Sequelize.TIME,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {

     await queryInterface.dropTable('reserva');

  }
};
