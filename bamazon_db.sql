DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DEC(6,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milk", "Dairy", 3.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carrots", "Produce", 1.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Dogs", "Deli", 4.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Bakery", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Roses", "Floral", 10.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza", "Frozen", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice Cream", "Frozen", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yogurt", "Dairy", .10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green Peppers", "Produce", .99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apples", "Produce", 2.50, 100);