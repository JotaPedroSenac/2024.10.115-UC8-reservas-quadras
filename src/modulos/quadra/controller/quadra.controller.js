const quadra = require('../model/quadra.model');

class QuadraController {
    static async cadastrarReserva(req, res) {
        try {
            const { quadra_nome, tipo, data_reserva, hora_inicio, hora_fim, usuario_responsavel } = req.body;

            const novaReserva = await quadra.create({
                quadra_nome,
                tipo,
                data_reserva,
                hora_inicio,
                hora_fim,
                usuario_responsavel
            });

            res.status(201).json(novaReserva);
        } catch (error) {
            console.error('Erro ao cadastrar reserva:', error);
            res.status(500).json({ error: 'Erro ao cadastrar reserva' });
        }
    }

    static async listarReservas(req, res) {
        try {
            const reservas = await quadra.findAll();
            res.status(200).json(reservas);
        } catch (error) {
            console.error('Erro ao listar reservas:', error);
            res.status(500).json({ error: 'Erro ao listar reservas' });
        }
    }

    static async buscarReservaPorId(req, res) {
        try {
            const { id } = req.params;
            const reserva = await quadra.findByPk(id);
            if (!reserva) {
                return res.status(404).json({ error: 'Reserva não encontrada' });
            }
            res.status(200).json(reserva);
        } catch (error) {
            console.error('Erro ao buscar reserva por ID:', error);
            res.status(500).json({ error: 'Erro ao buscar reserva por ID' });
        }
    }

    static async atualizarReserva(req, res) {
        try {
            const { id } = req.params;
            const { quadra_nome, tipo, data_reserva, hora_inicio, hora_fim, usuario_responsavel } = req.body;

            const reservaAtualizada = await quadra.update(
                { quadra_nome, tipo, data_reserva, hora_inicio, hora_fim, usuario_responsavel },
                { where: { id } }
            );

            if (reservaAtualizada[0] === 0) {
                return res.status(404).json({ error: 'Reserva não encontrada' });
            }

            res.status(200).json({ message: 'Reserva atualizada com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar reserva:', error);
            res.status(500).json({ error: 'Erro ao atualizar reserva' });
        }
    }

    static async excluirReserva(req, res) {
        try {
            const { id } = req.params;

            const reservaExcluida = await quadra.destroy({ where: { id } });

            if (reservaExcluida === 0) {
                return res.status(404).json({ error: 'Reserva não encontrada' });
            }

            res.status(200).json({ message: 'Reserva excluída com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir reserva:', error);
            res.status(500).json({ error: 'Erro ao excluir reserva' });
        }
    }


}

module.exports = QuadraController;