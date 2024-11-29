const Aluno = require('../models/Aluno');

// Função para listar alunos
exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find(); // Verifique se a conexão com o banco está funcionando
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos' });
  }
};

// Função para criar um novo aluno
exports.createAluno = async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    await novoAluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar aluno' });
  }
};
