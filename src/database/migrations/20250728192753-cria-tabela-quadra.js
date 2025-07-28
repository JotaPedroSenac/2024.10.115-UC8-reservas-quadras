'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quadra', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quadra_nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM("Futsal", "Volei", "Tenis"),
        allowNull: false,
      },
    });

  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('quadra');
  }
};
