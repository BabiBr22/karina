// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB conectado: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
//     process.exit(1); // Encerra o processo em caso de falha
//   }
// };

// module.exports = connectDB;

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Conexão com o banco de dados bem-sucedida!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};

module.exports = { connectDB, pool };


