const connection = require("../infra/db-connections")("infra/movieTheater.db")
const customerDAO = require("../models/customerDAO")(connection);
const basketDAO = require("../models/basketDAO")(connection);
const movieDAO = require("../models/movieDAO")(connection);
const formidable = require("formidable");

exports.getCustomers = (req, res) => {
  customerDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    return res.json(rows);
  });
};

exports.getCustomerbyId = (req, res) => {
  const id = req.params.id;
  customerDAO.findById(id, (err, row) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }

    res.json(row);
  });
};

exports.createCustomer = (req, res) => {

  var customer = req.body;
    customerDAO.createCustomer(req.body, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Erro ao salvar os dados.",
          err: err,
        });
      }
      
      return res.redirect("/customers");
    });
  };


exports.editCustomer = (req, res) => {
  const id = req.params.id;

  customerDAO.findById(id, (err, row) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Houve um erro ao consultar os dados.",
        err: err,
      });
    }

    if (!row) {
      return res.status(404).json({
        errorMessage: "Customer não encontrado.",
        err: err,
      });
    }

    const customer = { ...row, ...req.body };

    customerDAO.updateCustomer(id, customer, (err2) => {
      console.log(customer);
      if (err2) {
        return res.status(500).json({
          errorMessage: "Algo errado aconteceu.",
          err: err2,
        });
      }

      return res.redirect("/customers");
    });
  });
};

exports.addMovie = (req, res) => {
  const customerId = req.params.id;

  basketDAO.findById(customerId, (err, row1) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Houve um erro ao consultar os dados.",
        err: err,
      });
    }

    if (!row1) {
      return res.status(404).json({
        errorMessage: "Customer não encontrado.",
        err: err,
      });
    }
    const basket = { ...row1, ...req.body};

    movieDAO.findById(basket.movieId, (err1, row2) => {
      if (err1) {
        return res.status(500).json({
          errorMessage: "Houve um erro ao consultar os dados.",
          err: err,
        });
      }
      basket.priceMovie = row2.price;
      //const basket2 = {...row2, ...basket};

      basketDAO.updateBasket(customerId, basket, (err2) => {
        console.log(basket);
        console.log(customerId);
        if (err2) {
          return res.status(500).json({
            errorMessage: "Algo errado aconteceu.",
            err: err2,
          });
        }
  
        return res.redirect("/baskets");
      });
  });
});
}

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;

  customerDAO.deleteCustomer(id, (err) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo errado aconteceu.",
        err: err,
      });
    }

    basketDAO.deleteBasket(id, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Algo errado aconteceu.",
          err: err,
        });
      }
    return res.json({message: "Customer apagado!"});
  });

});
};
