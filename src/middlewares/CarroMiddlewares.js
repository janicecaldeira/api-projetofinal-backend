const mongoose = require("mongoose");
const Carro = require("../models/Carro");

const validaID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id Inválido" });
    return;
  }

  try {
    const carro = await Carro.findById(id);
    if(!carro){
        return res.status(404).send({msgMiddleware: "Carro não encontrado."})
    }
    res.carro = carro
  } catch (err) {
    return res.status(500).send({error: err})
  }

  next();
};

module.exports = { validaID };