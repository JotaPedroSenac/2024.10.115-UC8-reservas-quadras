const jwt = require('jsonwebtoken');

class AutenticacaoMiddleware {
    static verificarToken(req, res, next) {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Token não fornecido' });
        }

        jwt.verify(token, process.env.SECRET_KEY, (erro, decoded) => {
            if (erro) {
                return res.status(403).json({ error: 'Token inválido' });
            }
            req.usuario = decoded;
            next();
        });
    }
}

module.exports = AutenticacaoMiddleware;