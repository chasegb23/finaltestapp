var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'nodeuser',
  password:'nodeuser@1234',
  database:'Testdb'
});
router.get('/', function(req, res, next) {



  connection.query('UPDATE testable SET post = "New Post" WHERE id=1', function (error, results, fields) {
  if (error) throw error;
  res.send("This Works");
  console.log("This Works");
  });


});
module.exports = router;
