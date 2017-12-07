var mysql = require("mysql");
/*var inquirer = require("inquirer");*/

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "G!rlsc0utc@mp0ut",
  database: "bamazon"
});

/*connection.connect(function(err) {
  if (err) throw err;
  showProductsPrices();
});*/


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayProducts();
});


function displayProducts() {
  var query = "SELECT * FROM products";

  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Product Id: " + res[i].id + " || Product: " + res[i].product_name + " || Price: " + res[i].price);
    }
  });
}

/*function showProductsPrices() {
	var query = "SELECT id, product_name, price FROM bamazon";
	connection.query(query, function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].id);
		}
	})
	console.log(query);
};*/