const mysql = require('mysql');

//ini data untuk bisa sambungin dengan database
//deklasiin semua database yang akan dipakai

var connection = mysql.createConnection({
    dialect: "mysql",
    port: "3306",
    host: "192.168.1.73",
    insecureAuth: true,
    user: "emon_tf",
    password: "emon_tf2x5=10",
    database: "BESSCDAPLatihan"
  });

var connection2 = mysql.createConnection({
    dialect: "mysql",
    port: "3306",
    host: "192.168.1.73",
    insecureAuth: true,
    user: "emon_tf",
    password: "emon_tf2x5=10",
    database: "BESSCDAPLatihan" //database yang lain disini
  });

  //fungsi untuk menghbungkannya
  conection.connect(function(err){ //
      if(!!err){
          console.log(err);
      }
      else{
          console.log("connected");
      }
  }); 

  connection2.connect(function(err){ 
      if(!!err){
          console.log()
      }
      else{
          console.log("connection2 connected");
      }
  });

module.exports = connection; 
module.exports = connection2; 
// Baby step connection udah bisa 