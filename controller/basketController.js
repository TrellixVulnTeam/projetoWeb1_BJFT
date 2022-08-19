const connection = require("../infra/db-connections")("infra/movieTheater.db")
const basketDAO = require("../models/basketDAO")(connection);

exports.getBaskets = (req, res) => {
    basketDAO.findAll((err, rows) => {
        if (err) {
            return res.json({ message: "Houve um erro ao consultar os dados", err });
        }
        return res.json(rows);
    });
};

exports.getBasketByCustomerId = (req, res) => {
    const id = req.params.id;
    basketDAO.findById(id, (err, row) => {
        if (err) {
            return res.json({ message: "Houve um erro ao consultar os dados", err });
        }

        return res.json(row);
    });
};

exports.createBasket= (req, res) => {

    basketDAO.createBasket(req, (err) => {
      console.log("oi");
      if (err) {
        return res.status(500).json({
          errorMessage: "Erro ao salvar os dados.",
          err: err,
        });
      }

      return res.redirect("/baskets");
    });
  }

exports.deleteBasket= (req, res) => {
    const id = req.params.id;
  
    basketDAO.deleteBasket(id, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Algo errado aconteceu.",
          err: err,
        });
      }
  
      return res.json({message: "Customer apagado!"});
    });
  };