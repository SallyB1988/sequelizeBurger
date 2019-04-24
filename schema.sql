DROP DATABASE IF EXISTS seq_burgers_db;

CREATE DATABASE seq_burgers_db;
USE seq_burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
    bun varchar(25),
    cheese varchar(25),
    burger_type varchar(25),
	eaten BOOLEAN,
    createdAt datetime,
    updatedAt datetime,
	PRIMARY KEY (id)
);
