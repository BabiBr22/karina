require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const alunoRoutes = require('./src/routes/alunoRoutes');
const pool = require('./src/config/db.js');

const app = express();

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erro ao conectar:', err);
    } else {
        console.log('Conectado ao PostgreSQL!', res.rows);
    }
});

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/alunos', alunoRoutes);

// Conectar ao banco de dados e iniciar o servidor
const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
