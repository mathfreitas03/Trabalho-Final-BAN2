import { fileURLToPath } from 'url';
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import userRoute from './routes/user.routes.js';
const searchRouteModule = await import('./routes/search.routes.js')
const searchRoute = searchRouteModule.default
const insertRouteModule = await import('./routes/insert.route.js')
const insertRoute = insertRouteModule.default
import fs from 'fs'
import pg from 'pg'

// Estas duas linhas são necessárias para pegar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config()

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('ca.pem').toString(),
    },
};

const pool = new pg.Pool(config);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})

app.use(express.json())

// Permissão para que o app use os arquivos do controller
app.use('/backend', express.static(path.join(__dirname, '..', 'backend')));

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/users', userRoute);

app.use('/search', searchRoute(pool));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'index.html'), err => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo');
        }
    });
})

async function testeCon() {
  try {
    await pool.connect();
    const resultado = await pool.query('select * from professor');
    return resultado.rows[0];
  } catch (error) {
    throw error;
  }
}

app.get('/testar_conexao', async (req, res) => {
  try {
    const consulta = await testeCon();
    res.send(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro na conexão');
  }
});

app.use('/insert', insertRoute(pool))