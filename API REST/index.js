const express = require("express");
const app = express();
app.use(express.json());

// Banco de dados simulado (array em memória)
let curriculos = [];

// Rota para obter todos os currículos
app.get("/curriculos", (req, res) => {
  res.json(curriculos);
});

// Rota para obter um currículo específico pelo ID
app.get("/curriculos/:id", (req, res) => {
  const id = req.params.id;
  const curriculo = curriculos.find((c) => c.id === id);
  if (curriculo) {
    res.json(curriculo);
  } else {
    res.status(404).json({ message: "Currículo não encontrado." });
  }
});

// Rota para criar um novo currículo
app.post("/curriculos", (req, res) => {
  const curriculo = req.body;
  curriculos.push(curriculo);
  res.status(201).json({ message: "Currículo criado com sucesso." });
});

// Rota para atualizar um currículo existente
app.put("/curriculos/:id", (req, res) => {
  const id = req.params.id;
  const curriculoIndex = curriculos.findIndex((c) => c.id === id);
  if (curriculoIndex !== -1) {
    curriculos[curriculoIndex] = req.body;
    res.json({ message: "Currículo atualizado com sucesso." });
  } else {
    res.status(404).json({ message: "Currículo não encontrado." });
  }
});

// Rota para excluir um currículo
app.delete("/curriculos/:id", (req, res) => {
  const id = req.params.id;
  curriculos = curriculos.filter((c) => c.id !== id);
  res.json({ message: "Currículo excluído com sucesso." });
});

app.listen(7010, () => {
  console.log("Servidor rodando na porta 7010");
});
