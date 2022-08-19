DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE
);

INSERT INTO customers (name, email, phone) VALUES ('Paloma', 'paloma@mail.com', '999999999' );
INSERT INTO customers (name, email, phone) VALUES ('Bruna', 'bruna@mail.com', '88888888'  );
INSERT INTO customers (name, email, phone) VALUES ('Matheus', 'matheus@mail.com', '77777777'  );

DROP TABLE IF EXISTS baskets;

CREATE TABLE baskets (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerId INTEGER,
	movieId INTEGER DEFAULT 0,
    priceMovie DECIMAL DEFAULT 0
);

CREATE TABLE movies (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
	duration TEXT,
    genre TEXT,
    price DECIMAL
);

INSERT INTO movies (name, duration, genre, price) VALUES ('Batman: Begins', '2h20min', 'Ação/Fantasia', 12);
INSERT INTO movies (name, duration, genre, price) VALUES ('Batman: O Cavaleiro das Trevas', '2h32min', 'Ação/Fantasia', 13);
INSERT INTO movies (name, duration, genre, price) VALUES ('Batman: O calaveiro das Trevas Ressurge', '2h45min', 'Ação/Fantasia', 14);
INSERT INTO movies (name, duration, genre, price) VALUES ('Interestelar', '2h49min', 'Ficção Científica', 15);
INSERT INTO movies (name, duration, genre, price) VALUES ('Dogville', '2h58min', 'Drama', 20);

SELECT * FROM customers;

SELECT * FROM baskets;

SELECT * FROM movies;



