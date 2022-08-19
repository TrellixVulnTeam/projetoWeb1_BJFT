const customerController = require("./controller/customerController");
const moviesController = require("./controller/moviesController");
const basketController = require("./controller/basketController");

module.exports = (app) => {
  app.get("/movies", (req, res) => 
  moviesController.getMovies(req, res));

  app.get("/movies/:id", (req, res) =>
    moviesController.getmoviesById(req, res)
  );

  app.get("/customers", (req, res) =>
    customerController.getCustomers(req, res)
  );

  app.get("/customers/:id", (req, res) =>
    customerController.getCustomerbyId(req, res)
  );

  app.get("/baskets/:id", (req, res) =>
    basketController.getBasketByCustomerId(req, res)
  );

  app.post("/create-customer", (req, res) =>
    customerController.createCustomer(req, res)
  );

  app.post("/add-movie/:id", (req, res) =>
  customerController.addMovie(req, res)
);

  app.post("/update-customer/:id", (req, res) =>
    customerController.editCustomer(req, res)
  );

  app.get("/delete-customer/:id", (req, res) =>
    customerController.deleteCustomer(req, res),
  );

  app.get("/baskets", (req, res) =>
    basketController.getBaskets(req, res)
  );

  app.post("/create-basket/:id", (req, res) =>
  basketController.createBasket(req, res)
);


};
