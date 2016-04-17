## phpmyadmin-Node.js
A phpmyadmin-Node.js based repo.<br>
It describes the code required for making a connection between MySQL of phpmyadmin and Node.js<br>
<br>
Follow these steps to get your code running <br>
<ul>
 <li>Write in command line</li>
  <pre>$ npm install mysql </pre>
 <li>Install xampp, and successfully run phpmyadmin on localhost.</li>
 <li>Make a database name 'login' in phpmyadmin</li>
 <li>Import login.sql into the database to get the login table.</li>
 <li>Inside your app.js file (db.js in case of mine) write</li>
 <pre>
 var mysql = require('mysql');
 var config = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'login'
  };
 var connection = mysql.createConnection(config);
 connection.connect();</pre>
 <li>Your db should be successfully connected.</li>
 <li>To execute a query, write (where {{sql}} would be your query) </li>
 <pre>
 connection.query({{sql}}, function(err, rows, fields) {
    rows = JSON.stringify(rows);
    if (!err){
      callback('', rows);
    } else {
      callback(err, '');
    }
  });</pre>
  <li>Your code should be up and running.</li>
</ul>
<br>
To deploy you code, just change the config object to values provided by your database administrator.
<br>
I would gladly accept contribution, for this repo.
