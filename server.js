const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;
    if (!cepRegex.test(cep)) {
        return res.status(400).send('CEP inválido');
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao consultar o CEP' });
    }
});

app.listen(port, () => {
  console.log(`Sevidor rodando em http://localhost:${port}`);
});