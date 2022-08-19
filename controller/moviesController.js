const connection = require("../infra/db-connections")("infra/movieTheater.db")
const movieDAO = require("../models/movieDAO")(connection);

exports.getMovies = (req, res) => {
    movieDAO.findAll((err, rows) => {
        if (err) {
            return res.json({ message: "Houve um erro ao consultar os dados", err });
        }
        return res.json(rows);
    });
};

exports.getmoviesById = (req, res) => {
    const id = req.params.id;
    movieDAO.findById(id, (err, row) => {
        if (err) {
            return res.json({ message: "Houve um erro ao consultar os dados", err });
        }

        return res.json(row);
    });
};