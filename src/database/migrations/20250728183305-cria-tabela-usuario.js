'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('usuario', { 
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nome: {
                    type: Sequelize.STRING(300),
                    allowNull: false,
                },
                papel: {
                    type: Sequelize.ENUM("aluno", "funcionario", "admin"),
                    allowNull: false,
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                },
                senha: {
                    type: Sequelize.STRING,
                    allowNull: false,
                }  
      });
      await queryInterface.addIndex('usuario', ['email']);
      await queryInterface.addIndex('usuario', ['papel']);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuario');
  }
};
