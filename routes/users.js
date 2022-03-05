var express = require('express');
var  router = express.Router();
var connection = require('../db-config');


/* GET users listing. */
router.get('/comments', function(req, res, next) {
  var getCommentsQ = " SELECT * FROM `AlarmLogging`";
  connection.query(getCommentsQ, function(err, result){
    if(err){
      console.log(err);
      res.send("Unable to get the database BESSCDAPLatihan");
    }
    else {
      res.send(result);
    }
  });
});

router.get('/comment/:id', function(req, res, next) {
  var getCommentsQ = " SELECT * FROM `AlarmLogging` WHERE `cid` ="+req.params.id;

  connection.query(getCommentsQ, function(err, result){
    if(err){
      console.log(err);
      res.send("Unable to get the database BESSCDAPLatihan");
    }
    else {
      res.send(result);
    }
  });
});
//Ketika menggunakan nilai id maka hanya mengambil satu nilai comment saja
//Kalo misalnya mau ambil semua nilai bisa langsung panggil comments semuanya

module.exports = router;
