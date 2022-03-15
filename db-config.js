const mysql = require('mysql');

//ini data untuk bisa sambungin dengan database
//deklasiin semua database yang akan dipakai

var connection = mysql.createConnection({
    dialect: "mysql",
    port: "3306",
    host: "localhost",
    insecureAuth: true,
    user: "root",
    password: "root",
    database: "bois"
  });

  //fungsi untuk menghbungkannya
  connection.connect(function(err){ //
      if(!!err){
          console.log(err);
      }
      else{
          console.log("connected");
      }
  }); 

module.exports = connection; 
// Baby step connection udah bisa 