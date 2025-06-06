import { fileURLToPath } from 'url';
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import userRoute from './routes/user.routes.js';

// Estas duas linhas são necessárias para pegar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})
// Permissão para que o app use os arquivos do controller
app.use('/backend', express.static(path.join(__dirname, '..', 'backend')));

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'index.html'), err => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo');
        }
    });
})