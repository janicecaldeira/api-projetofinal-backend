const Carro = require("../models/Carro");

const getAll = async (req, res) => {
  try {
    const carros = await Carro.find();
    if (carros.length === 0)
      return res
        .status(404)
        .send({ message: "Não existem carros cadastrados!" });
    return res.send({ carros });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const carro = await Carro.findById(id);
    if (!carro) {
      res.status(404).json({ message: "Carro não encontrado" });
      return;
    }
    return res.send({ carro });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, marca, imagem } = req.body;

  if (!nome || !marca || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoCarro = await new Carro({
    nome,
    marca,
    imagem,
  });

  try {
    await novoCarro.save();
    return res
      .status(201)
      .send({ message: "Carro criado com sucesso", novoCarro });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, marca, imagem } = req.body;

  if (!nome || !marca || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.carro.nome = nome;
  res.carro.marca = marca;
  res.carro.imagem = imagem;

  try {
    await res.carro.save();
    res.send({ message: "Carro alterado com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.carro.remove();
    return res.send({ message: "Carro removido com sucesso!" });
  } catch (err) {
    return res.status(500).send({ erro: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, marca } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !marca ? (marca = "") : (marca = marca);

  try {
    const carros = await Carro.find({
      nome: { $regex: `${nome}`, $options: "i" },
      marca: { $regex: `${marca}`, $options: "i" },
    });

    if (carros.length === 0)
      return res.status(404).send({ erro: "Carro não encontrado" });

    return res.send({ carros });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterAll,
};
