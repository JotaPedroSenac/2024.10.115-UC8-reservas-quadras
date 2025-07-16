const { sequelize } = require('../../../config/configDb');
const { DataTypes } = require('sequelize');
const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(300),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 300],
                    msg: 'O nome do usuário deve ter no mínimo 2 caracteres e no máximo 300'
                }
            }
        },
        papel: {
            type: DataTypes.ENUM("aluno", "funcionario", "admin"),
            allowNull: false,
            validate: {
              isIn: {
                args: [["aluno", "funcionario", "admin"]],
                msg: "O papel deve ser aluno, funcionário ou admin."
              }
            }
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: { msg: "Email inválido" },
            },

        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^(?=.{6,})(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).+$/,
                    msg: 'Senha precisa ter pelo menos 5 caracteres, incluir uma letra e um caractere especial '
                }

            }
        }
    },
    {
        tableName: 'usuario',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }
);

module.exports = Usuario;