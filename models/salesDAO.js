class SalesDAO {
    constructor(conn) {
        this.db = conn;
    }

    findAll(callback) {
        this.db.all(`SELECT * FROM sales`, callback);
    }

    findById(id, callback) {
        this.db.all(`SELECT * FROM sales WHERE id = ?`, id, callback);
    }

    findByCustomerId(customerId, callback) {
        this.db.all(`SELECT * FROM sales WHERE customerId = ?`, customerId, callback);
    }

    saveSale(basketId, callback) {
        const { id, quantidade, image, categoryId } = this.db.get(
            `SELECT * FROM baskets WHERE basketId = ?`, basketId, callback
        );
        this.db.run(
            `INSERT INTO sales (name, image, price, categoryId) 
           VALUES (?, ?, ?, ?)`,
            [name, image, price, categoryId],
            callback
        );
    }

    updateProduct(id, product, callback) {
        const { name, price, image, categoryId } = product;
        const sql = `UPDATE products SET name = ?, price = ?, image = ?, categoryId = ? WHERE id = ?`;

        this.db.run(sql, [name, price, image, categoryId, id], callback);
    }

    deleteProduct(id, callback) {
        const sql = `DELETE FROM products WHERE id = ?`;

        this.db.run(sql, id, callback);
    }
}

module.exports = (conn) => {
    return new ProductsDAO(conn);
};
