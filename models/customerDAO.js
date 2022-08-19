class CustomerDAO {
    constructor(connection) {
        this.db = connection;
    }

    findAll(callback) {
        this.db.all(`SELECT * FROM customers`, callback);
    }

    findById(id, callback) {
        this.db.get(`SELECT * FROM customers WHERE id = ?`, id, callback);
    }

    createCustomer(customer, callback) {
        console.log(customer);  
        const { name, email, phone } = customer;
        this.db.run(
            `INSERT INTO customers (name, email, phone) 
            VALUES (?, ?, ?)`,
            [name, email, phone],
            callback
        );
    }

    updateCustomer(id, customer, callback) {
        console.log("dentro do model");
        const { name, email, phone } = customer;
        const sql = `UPDATE customers SET name = ?, email = ?, phone = ? WHERE id = ?`;
        this.db.run(sql, [name, email, phone, id], callback);
    }

    deleteCustomer(id, callback) {
        const sql1 = `DELETE FROM customers WHERE id = ?`;
        this.db.run(sql1, id, callback);
    }
}

module.exports = (connection) =>{
    return new CustomerDAO(connection);
}