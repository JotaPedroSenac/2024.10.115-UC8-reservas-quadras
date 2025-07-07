const { sequelize } = require('../../../config/configDb');
const { DataTypes } = require('sequelize');

const Quadra = sequelize.define(
    "Quadra",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quadra_nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        data_reserva:{
            type: DataTypes.DATE,
            allowNull: false
        },
        hora_inicio:{
            type: DataTypes.TIME,
            allowNull: false
        },
        hora_fim:{
            type: DataTypes.TIME,
            allowNull: false
        },
        usuario_responsavel:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'quadra',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }
);

module.exports = Quadra ;