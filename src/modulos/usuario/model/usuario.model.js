const { sequelize } = require('../../../config/configDb');
const { DataTypes } = require('sequelize');
const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'usuario',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }
);

module.exports = Usuario;