const { sequelize } = require('../../../config/configDb');
const { DataTypes } = require('sequelize');
const Usuario = require('../../usuario/model/usuario.model')

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
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Usuario, key: 'id' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    },
    {
        tableName: 'quadra',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
        validate: {
            dataFimMaiorQueInicio() {
            if (this.data_fim <= this.data_inicio) {
            throw new Error('data_fim deve ser posterior a data_inicio.');
      }
    },
  },
    }
);

module.exports = Quadra ;