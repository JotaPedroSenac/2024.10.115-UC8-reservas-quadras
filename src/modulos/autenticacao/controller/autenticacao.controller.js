const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
const Usuario = require('../../usuario/model/usuario.model');

// definir variáveis de acess token e refresh token
const tempo_acess_token = process.env.TEMPO_ACESS_TOKEN
const tempo_refresh_token = process.env.TEMPO_REFRESH_TOKEN

class AutenticacaoController {
//  gerar token
    static gerarToken(usuario) {
        return jwt.sign(usuario, process.env.SECRET_KEY, {
            expiresIn: tempo_acess_token
        })
    }

    // gerar refresh token
    static gerarRefreshToken(usuario) {
        return jwt.sign(usuario, process.env.SECRET_KEY, {
            expiresIn: tempo_refresh_token
        })
    }

    // login
    static async login(req, res){
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ where: { email } });
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
            if (!senhaCorreta) {    
                return res.status(401).json({ error: 'Senha incorreta' });
            }

            const dadosUsuario = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                papel: usuario.papel
            };

            // gerar tokens
            const accessToken = AutenticacaoController.gerarToken(dadosUsuario);
            const refreshToken = AutenticacaoController.gerarRefreshToken(dadosUsuario);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: false,
                secure: process.env.NODE_ENV,
                sameSite: 'Strict',
                maxAge: 1 * 24
            });

            res.status(200).json({ accessToken});

        } catch (error) {
            res.status(500).json({ error: 'Erro ao realizar login' });
        }
    }

    // renovar refresh token
    static async renovarRefreshToken(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ error: 'Refresh token inválido' });
            }

            jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (erro, usuario) => {
                if (erro) {
                    return res.status(403).json({ error: 'Refresh token inválido' });
                }

                const novoAccessToken = AutenticacaoController.gerarToken({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    papel: usuario.papel
                });

                res.json({ accessToken: novoAccessToken });
            });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao renovar refresh token' });
        }
    }

    // sair
    static async sair(req, res) {
        try {
            res.clearCookie('refreshToken', {
                httpOnly: true,
                secure: process.env.NODE_ENV,
                sameSite: 'Strict',});
            res.status(200).json({ message: 'Logout realizado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao realizar logout' });
        }
    }
}

module.exports = AutenticacaoController;
