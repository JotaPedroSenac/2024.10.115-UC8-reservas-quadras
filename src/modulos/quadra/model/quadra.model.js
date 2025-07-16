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
            type: DataTypes.ENUM("Futsal", "Volei", "Tenis"),
            allowNull: false,
            validate:{
                isIn:{
                    args:[["Futsal", "Volei", "Tenis"]],
                    msg: "Os tipos devem ser: Futsa, Vôlei ou Tênis!"
                }
            }
        },
    },
    {
        tableName: 'quadra',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }
);

module.exports = Quadra ;