DROP DATABASE IF EXISTS logs;

CREATE DATABASE logs;

USE logs;

CREATE TABLE historical_log (
  id int NOT NULL AUTO_INCREMENT,
  amount integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
