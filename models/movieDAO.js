class MoviesDAO {
    constructor(connection) {
        this.db = connection;
    }

    findAll(callback) {
        this.db.all(`SELECT * FROM movies`, callback);
    }

    findById(id, callback) {
        this.db.get(`SELECT * FROM movies WHERE id = ?`, id, callback);
    }
}

module.exports = (connection) => {
    return new MoviesDAO(connection);
};