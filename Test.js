var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'nodeuser',
   password : 'nodeuser@1234',
   database : 'Testdb'
 });

 connection.connect();

 connection.query('SELECT post from testable WHERE id=1', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', JSON.stringify(rows));
   else
     console.log('Error while performing Query.');
 });

 connection.end();
