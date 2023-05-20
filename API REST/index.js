const express = require("express");
const app = express();
app.use(express.json());

class Curriculo {
  constructor(id, nome, cargo, experiencia) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.experiencia = experiencia;
  }
}

class CurriculoController {
  static getAll(req, res) {
    res.json(curriculos);
  }

  static getById(req, res) {
    const id = req.params.id;
    const curriculo = curriculos.find((c) => c.id === id);
    if (curriculo) {
      res.json(curriculo);
    } else {
      res.status(404).json({ message: "Currículo não encontrado." });
    }
  }

  static create(req, res) {
    const { id, nome, cargo, experiencia } = req.body;
    const curriculo = new Curriculo(id, nome, cargo, experiencia);
    curriculos.push(curriculo);
    res.status(201).json({ message: "Currículo criado com sucesso.", inputs: req.body });
  }

  static update(req, res) {
    const id = req.params.id;
    const curriculoIndex = curriculos.findIndex((c) => c.id === id);
    if (curriculoIndex !== -1) {
      const { nome, cargo, experiencia } = req.body;
      curriculos[curriculoIndex] = new Curriculo(id, nome, cargo, experiencia);
      res.json({ message: "Currículo atualizado com sucesso.", inputs: req.body });
    } else {
      res.status(404).json({ message: "Currículo não encontrado." });
    }
  }

  static delete(req, res) {
    const id = req.params.id;
    curriculos = curriculos.filter((c) => c.id !== id);
    res.json({ message: "Currículo excluído com sucesso." });
  }
}

// Banco de dados simulado (array em memória)
let curriculos = [];

// Rotas utilizando as classes de controller e model

app.get("/curriculos", CurriculoController.getAll);
app.get("/curriculos/:id", CurriculoController.getById);
app.post("/curriculos", CurriculoController.create);
app.put("/curriculos/:id", CurriculoController.update);
app.delete("/curriculos/:id", CurriculoController.delete);

// Rota para obter lista estática de projetos relacionados
app.get("/projetos", (req, res) => {
  const projetos = [
    { nome: "Projeto 1", descricao: "Descrição do Projeto 1" },
    { nome: "Projeto 2", descricao: "Descrição do Projeto 2" },
  ];
  res.json(projetos);
});

app.listen(7010, () => {
  console.log("Servidor rodando na porta 7010");
});


