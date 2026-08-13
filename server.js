const express = require('express');

const app = express();

app.use(express.json());

app.get('/alunos', (req, res) => {
    res.send("Lendo dados do banco...");
})

app.post('/alunos', (req, res) => {
  res.send(`Nome: ${req.body.nome} Idade:${req.body.idade}`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})