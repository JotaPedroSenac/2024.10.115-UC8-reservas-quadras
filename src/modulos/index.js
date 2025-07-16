const Usuario = require('./usuario/model/usuario.model');
const Quadra = require('./quadra/model/quadra.model');

Usuario.hasMany(Quadra, {
  foreignKey: 'usuario_responsavel',
  as: 'usuario_quadra',
});

Quadra.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  as: 'usuario',
});

module.exports = { Usuario, Assinatura };
