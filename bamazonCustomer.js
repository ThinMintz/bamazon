var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "G!rlsc0utc@mp0ut",
  database: "bamazon"
});


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

function askWhichProduct() {
  inquirer.
  prompt([{
    name: "item",
    type: "input",
    message: "Pick the ID of the item you would like to buy"
    validate: function(itemNumber) {
      if (isNan(value) === false) {
        return true;
      } else {
         return false;
            }
        }, { name: "quantity",
            type: "input",
            message: "How many would you like to order?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function(answer) {
  var item = answer.productID;
  //console.log(item);

  var itemAmount = answer.amount;
  //console.log(itemAmount);
  console.log("You are buying " + itemAmount + " of " + item +".");
  connection.query("SELECT * FROM products WHERE ?", 
            
  [{item_id : item}], 
    function(err, res) {
      if (err) throw err;
        //console.log(res);

            var inStock = res[0].stock_quantity;
            var price = res[0].price;
            var remainingStock = inStock - itemAmount;
            var grandTotal = price * itemAmount;
            console.log("Remaining in stock: " + remainingStock);
            console.log("Your total is " + grandTotal);

            endBamazon();
          });  
        });

function endBamazon() {
  connection.end();
};
