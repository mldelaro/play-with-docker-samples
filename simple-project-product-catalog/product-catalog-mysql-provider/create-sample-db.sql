CREATE DATABASE IF NOT EXISTS product_catalog;
USE product_catalog;

CREATE TABLE products (
  id int AUTO_INCREMENT,
  name char(64),
  description char(128),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO products VALUES (1, 'Apples', 'Green apple produce');

#USE mysql;
#update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';