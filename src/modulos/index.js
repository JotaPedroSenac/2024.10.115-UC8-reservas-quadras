const Usuario = require('./usuario/model/usuario.model');
const Quadra = require('./quadra/model/quadra.model');
const Reserva = require('./reserva/model/reserva.model');

// Uma reserva pertence a um usuário
Reserva.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  as: 'usuario',
});

// Um usuário pode ter várias reservas
Usuario.hasMany(Reserva, {
  foreignKey: 'usuario_id',
  as: 'reservas',
});

// Uma reserva pertence a uma quadra
Reserva.belongsTo(Quadra, {
  foreignKey: 'quadra_id',
  as: 'quadra',
});

// Uma quadra pode ter várias reservas
Quadra.hasMany(Reserva, {
  foreignKey: 'quadra_id',
  as: 'reservas',
});

module.exports = {
  Usuario,
  Quadra,
  Reserva,
};

