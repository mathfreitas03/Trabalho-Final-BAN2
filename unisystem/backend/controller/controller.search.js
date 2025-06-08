async function handleSearch(req, res, pool) {
    try {
        const dados = await req.body;
        console.log(dados)
        const tipoRegistro = dados['tipo-registro']
        const nome = dados['nome-projeto'];

        const query = `SELECT * FROM ${tipoRegistro} WHERE nome ILIKE $1`;
        const result = await pool.query(query, [`%${nome}%`]);
        const response = res.json(result.rows);
                
    } catch (err) {
        console.error('Erro na busca:', err);
        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
}

export default { handleSearch };
