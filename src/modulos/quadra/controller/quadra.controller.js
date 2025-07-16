const quadra = require('../model/quadra.model');

class QuadraController {
    static async cadastrarQuadra(req, res) {
        try {
            const { quadra_nome, tipo} = req.body;

            const novaQuadra = await quadra.create({
                quadra_nome,
                tipo
            });

            res.status(201).json(novaQuadra);
        } catch (error) {
            console.error('Erro ao cadastrar reserva:', error);
            res.status(500).json({ error: 'Erro ao cadastrar Quadra', erro: error.message });
        }
    }

    static async listarQuadras(req, res) {
        try {
            const quadras = await quadra.findAll();
            res.status(200).json(quadras);
        } catch (error) {
            console.error('Erro ao listar reservas:', error);
            res.status(500).json({ error: 'Erro ao listar reservas' });
        }
    }

    static async buscarQuadraPorId(req, res) {
        try {
            const { id } = req.params;
            const quadra = await quadra.findByPk(id);
            if (!quadra) {
                return res.status(404).json({ error: 'quadra não encontrada' });
            }
            res.status(200).json(quadra);
        } catch (error) {
            console.error('Erro ao buscar quadra por ID:', error);
            res.status(500).json({ error: 'Erro ao buscar quadra por ID' });
        }
    }

    static async atualizarQuadra(req, res) {
        try {
            const { id } = req.params;
            const { quadra_nome, tipo } = req.body;

            const quadraAtualizada = await quadra.update(
                { quadra_nome, tipo },
                { where: { id } }
            );

            if (quadraAtualizada[0] === 0) {
                return res.status(404).json({ error: 'Quadra não encontrada' });
            }

            res.status(200).json({ message: 'Quadra atualizada com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar quadra:', error);
            res.status(500).json({ error: 'Erro ao atualizar quadra' });
        }
    }

    static async excluirQuadra(req, res) {
        try {
            const { id } = req.params;

            const quadraExcluida = await quadra.destroy({ where: { id } });

            if (quadraExcluida === 0) {
                res.status(200).json({ message: 'Quadra excluída com sucesso' });
            }
        } catch (error) {
            console.error('Erro ao excluir quadra:', error);
            res.status(500).json({ error: 'Erro ao excluir quadra' });
        }
    }


}

module.exports = QuadraController;