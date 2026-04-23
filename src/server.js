// importa o express para o código
const express = require('express');

// importa a conexão feita no arquivo database
const connectDatabase = require('./config/database');

// importa pessoa do arquivo pessoa
const Pessoa = require('./models/pessoa');

// chamando o express para gerenciar as rotas
const app = express();

// setando um valor para a porta de conexão
const PORT = 3000;

// processo os dados para JSON
app.use(express.json());

// mensagem que vai aparecer ao entrar na rota '/'
app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST em Node.js com Express.' });
});

// faz a busca no banco para pegar os dados
app.get('/pessoas', async (req, res) => {
  // tenta fazer a busca
  try {
    // joga a pesquisa no banco para a variavel 'pessoas'
    const pessoas = await Pessoa.find();
    // se encontrado vai exibir os dados
    res.status(200).json(pessoas);
  // trata o erro  
  } catch (error) {
    // se cair no erro, vai exibir essa mensagem
    res.status(500).json({
      mensagem: 'Erro ao buscar pessoas.',
      erro: error.message,
    });
  }
});

// faz a conexão e sobe o projeto para o localhost
async function startServer() {
  try {
    // espera a conexão com o banco
    await connectDatabase();
    // se conectar, vai subir para o localhost
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  // trata o erro
  } catch (error) {
    // mensagem de erro
    console.error('Nao foi possivel iniciar a aplicacao.', error.message);
  }
}

// executa a função
startServer();