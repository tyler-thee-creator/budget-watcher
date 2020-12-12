DROP DATABASE IF EXISTS logs;

CREATE DATABASE logs;

USE logs;

CREATE TABLE historical_log (
  id int NOT NULL AUTO_INCREMENT,
  amount integer NOT NULL,
  description varchar(50) NOT NULL,
  date datetime NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE budget_settings (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(50) NOT NULL,
  amount integer NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
