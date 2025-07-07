const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./src/config/configDb');
const quadraRoutes = require('./src/modulos/quadra/routes/quadra.route');
const usuarioRoutes = require('./src/modulos/usuario/routes/usuario.route');


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', quadraRoutes);
app.use('/api', usuarioRoutes);


app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: true, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');

    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
    console.log(`Servidor rodando na porta ${port}`);
});