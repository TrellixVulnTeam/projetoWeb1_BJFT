class BasketDAO {
    constructor(connection) {
        this.db = connection;
    }

    findAll(callback) {
        this.db.all(`SELECT * FROM baskets`, callback);
    }

    findById(id, callback) {
        this.db.get(`SELECT * FROM baskets WHERE customerId = ?`, id, callback);
    }

    createBasket(req, callback) {
        const customerId = req.params.id;
        this.db.run(
            `INSERT INTO baskets (customerId) VALUES (?)`,
            [customerId],
            callback
        );
    }

    updateBasket(customerId, basket, callback) {
        console.log("dentro do model basket");
        const { id, movieId, priceMovie } = basket;
        const sql = `UPDATE baskets SET movieId = ?, priceMovie = ? WHERE customerId = ?`;
        this.db.run(sql, [movieId, priceMovie, customerId], callback);
    }

    deleteBasket(id, callback) {
        const sql = `DELETE FROM baskets WHERE customerId = ?`;

        this.db.run(sql, id, callback);
    }
}
module.exports = (connection) => {
    return new BasketDAO(connection);
};

