const express = require("express");
const app = express();
app.use(express.json());

class Paciente {
  constructor(id, nome, idade, genero, endereco) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.endereco = endereco;
  }
}

class Agenda {
  constructor(id, hora, data, observacoes) {
    this.id = id;
    this.hora = hora; 
    this.data = data;
    this.observacoes = observacoes;
  }
}

class PacienteController {
  static getAll(req, res) {
    res.json(pacientes);
  }

  static getById(req, res) {
    const id = req.params.id;
    const paciente = pacientes.find((p) => p.id === id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: "Paciente não encontrado." });
    }
  }

  static create(req, res) {
    const { id, nome, idade, genero, endereco } = req.body;
    const paciente = new Paciente(id, nome, idade, genero, endereco);
    pacientes.push(paciente);
    res.status(201).json({ message: "Paciente cadastrado com sucesso.", inputs: req.body });
  }

  static update(req, res) {
    const id = req.params.id;
    const pacienteIndex = pacientes.findIndex((p) => p.id === id);
    if (pacienteIndex !== -1) {
      const { nome, idade, genero, endereco } = req.body;
      pacientes[pacienteIndex] = new Paciente(id, nome, idade, genero, endereco);
      res.json({ message: "Paciente atualizado com sucesso.", inputs: req.body });
    } else {
      res.status(404).json({ message: "Paciente não encontrado." });
    }
  }

  static delete(req, res) {
    const id = req.params.id;
    pacientes = pacientes.filter((p) => p.id !== id);
    res.json({ message: "Paciente excluído com sucesso." });
  }
}

class AgendaController {
  static getAll(req, res) {
    res.json(agendas);
  }

  static getById(req, res) {
    const id = req.params.id;
    const agenda = agendas.find((a) => a.id === id);
    if (agenda) {
      res.json(agenda);
    } else {
      res.status(404).json({ message: "Agenda não encontrada." });
    }
  }

  static create(req, res) {
    const { id, hora, data, observacoes } = req.body;
    const agenda = new Agenda(id, hora, data, observacoes);
    agendas.push(agenda);
    res.status(201).json({ message: "Agenda cadastrada com sucesso.", inputs: req.body });
  }

  static update(req, res) {
    const id = req.params.id;
    const agendaIndex = agendas.findIndex((a) => a.id === id);
    if (agendaIndex !== -1) {
      const { hora, data, observacoes } = req.body;
      agendas[agendaIndex] = new Agenda(id, hora, data, observacoes);
      res.json({ message: "Agenda atualizada com sucesso.", inputs: req.body });
    } else {
      res.status(404).json({ message: "Agenda não encontrada." });
    }
  }

  static delete(req, res) {
    const id = req.params.id;
    agendas = agendas.filter((a) => a.id !== id);
    res.json({ message: "Agenda excluída com sucesso." });
  }
}

// Banco de dados simulado (array em memória)
let pacientes = [];
let agendas = [];

// Rotas utilizando as classes de controller e model

app.get("/pacientes", PacienteController.getAll);
app.get("/pacientes/:id", PacienteController.getById);
app.post("/pacientes", PacienteController.create);
app.put("/pacientes/:id", PacienteController.update);
app.delete("/pacientes/:id", PacienteController.delete);

app.get("/agendas", AgendaController.getAll);
app.get("/agendas/:id", AgendaController.getById);
app.post("/agendas", AgendaController.create);
app.put("/agendas/:id", AgendaController.update);
app.delete("/agendas/:id", AgendaController.delete);

// Rota para obter lista estática de projetos relacionados
app.get("/projetos", (req, res) => {
  const projetos = [
    { nome: "Projeto 1", descricao: "Descrição do Projeto 1" },
    { nome: "Projeto 2", descricao: "Descrição do Projeto 2" },
  ];
  res.json(projetos);
});

app.listen(8010, () => {
  console.log("Servidor rodando na porta 8010");
});
