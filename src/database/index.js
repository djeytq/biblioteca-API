const { Pool } = require('pg');

const pool = new Pool({
    user: 'biblioteca_owner', // Substitua pelo seu usuário do PostgreSQL
    host: 'ep-shrill-river-a45t94k7-pooler.us-east-1.aws.neon.tech', // Ou o host do seu banco de dados
    database: 'biblioteca', // Substitua pelo nome do seu banco de dados
    password: 'npg_nlJPUECM3S0b', // Substitua pela sua senha
    // port: 5432, // Porta padrão do PostgreSQL
     ssl: {
            rejectUnauthorized: false // Adicione esta linha para usar SSL
        }
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
    console.error('Erro no banco de dados:', err);
});

module.exports = {
    query: (text, params) => pool.query(text, params),pool
};