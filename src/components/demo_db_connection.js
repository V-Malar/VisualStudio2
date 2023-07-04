
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rajesh",
  password: "rajesh"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});