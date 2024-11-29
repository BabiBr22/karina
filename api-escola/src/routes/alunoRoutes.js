const express = require('express');
const router = express.Router();
const { getAlunos, createAluno } = require('../controllers/alunoController.js');

// Rotas para alunos
router.get('/', getAlunos);
router.post('/', createAluno);
// Adicione outras rotas como POST, PUT, DELETE

module.exports = router;
