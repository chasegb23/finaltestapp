var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'nodeuser',
  password:'nodeuser@1234',
  database:'Testdb'
});
/* GET users listing. */
router.get('/', function(req, res, next) {

connection.connect();

connection.query('SELECT post FROM testable WHERE id=1', function (error, results, fields) {
if (error) throw error;
res.send(JSON.stringify(results));
});
connection.end();
/*
res.json([{
  id: 1,
  username: "Chasegb23"
}, {
  id: 2,
  username: "cbeard"
}]);
*/
});
module.exports = router;
