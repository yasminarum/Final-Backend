var express = require("express");
var router = express.Router();
var connection = require("../db-config");
const app = express();
var username = "";

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* GET users listing. */
router.get("/comments", function (req, res, next) {
  var getCommentsQ = " SELECT * FROM `datapengukuran` LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database BESSCDAPLatihan");
    } else {
      res.send(result);
    }
  });
});

router.get("/comment/:id", function (req, res, next) {
  var getCommentsQ =
    " SELECT * FROM `datapengukuran` WHERE `cid` =" + req.params.id;

  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database BESSCDAPLatihan");
    } else {
      res.send(result);
    }
  });
});

router.get("/EnergyOutGrid", function (req, res, next) {
  var getCommentsQ =
    "SELECT `id`,`timestamp`,`EgyCntOut`, `ExtCur`, `TotBatCur` FROM `SI5048` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/EnergyOutInverter", function (req, res, next) {
  var getCommentsQ =
    "SELECT `id`,`timestamp`, `E-Total`/1000 FROM `SB2000HF` WHERE 1 ORDER by `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/EnergyOutLoad", function (req, res, next) {
  var getCommentsQ =
    "SELECT `id`, `timestamp`,(`VLL` * `A` * `PF` * 1.732)/1000 FROM `Load` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/EnergyOutLoad2", function (req, res, next) {
  var getCommentsQ =
    "SELECT `ticket_id`, `timestamp`, `request`, `response`, `status` FROM `alarm_logging` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/beban", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`,`A1`, `A2`, `A3`, (`A1`+`A2`+ `A3`) as `totalA`, (`A1`*`V1`*`PF1`) as P1,  (`A2`*`V2`*`PF2`) as P2,  (`A3`*`V3`*`PF3`) as P3, ((`A1`*`V1`*`PF1`) + (`A2`*`V2`*`PF2`) + (`A3`*`V3`*`PF3`)) as TOTAL FROM `load` WHERE 1 ORDER BY `timestamp` DESC LIMIT 60";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/pv", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`, (`A.Ms.Watt` / `Pac`) as PV, `A.Ms.Vol`, `A.Ms.Amp` FROM `SB2000HF` WHERE 1 ORDER BY `timestamp` ASC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/voltage-measurement-gb", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`, `ExtVtg`, `BatVtg`, `Fac` FROM `SI5048` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/voltage-measurement-load", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`, `V1`, `V2`, `V3`, `F` FROM `load` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/voltage-measurement-load", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`, `V1`, `V2`, `V3` FROM `load` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/MonitoringLoad", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`,(`VLL` * `A` * `PF` * 1.732)/1000, `VLL`, `PF`, `A` FROM `Load` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/mg-battery", function (req, res, next) {
  var getCommentsQ =
    "SELECT `BatSoc`, `ExtVtg` FROM `SI5048` WHERE 1 ORDER BY `timestamp` DESC LIMIT 1";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/mg-pv", function (req, res, next) {
  var getCommentsQ =
    "SELECT `timestamp`, (`A.Ms.Watt` / `Pac`) as PV, `A.Ms.Vol`, `A.Ms.Amp` FROM `SB2000HF` WHERE 1 ORDER BY `timestamp` ASC LIMIT 1";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.get("/SatusEmergencyControl", function (req, res, next) {
  var getCommentsQ =
    "SELECT `status` FROM `alarm_logging` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.post("/submit-form", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const message = req.body.message;
  var queryInsert = "INSERT INTO `alarm_message` (username,email,message) VALUES (?,?,?)";
    connection.query(queryInsert,[username,email,message],function(err, result){
      if(err){
        console.log(err);
        res.send("Unable to insert data to alarm_logging");
      }
      else {
        res.send(result);
      }
    });
});

router.get("/daily-operation", function (req, res, next) {
  var getCommentsQ =
    "SELECT `id`,`timestamp`,`AptPhs`,`OpStt`,`BatChrgOp`,`Error` FROM `datapengukuran` WHERE 1 ORDER BY `timestamp` DESC LIMIT 24";
  connection.query(getCommentsQ, function (err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to get the database SI5048");
    } else {
      res.send(result);
    }
  });
});

router.post("/text-box", function (req, res, next) {
  var SibApiV3Sdk = require("sib-api-v3-sdk");
  var data = JSON.parse(req.body);

  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    "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";

  {
    new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        subject: "Hello from the Node SDK!",
        sender: { email: "13218063@std.stei.itb.ac.id", name: "Yasmin Sekar" },
        to: [{ name: "Yasmin 2", email: "alfanau18@gmail.com" }],
        htmlContent: `<html><body><h1>This is a transactional email ${data.nilai1} </h1></body></html>`,
        params: { bodyMessage: "Made just for you!" },
      })
      .then(
        function (data) {
          console.log(data);
        },
        function (error) {
          console.error(error);
        }
      );
  }
  // console.log(req.body.message)
});

router.get("/EmailTest", function (req, res, next) {
  var SibApiV3Sdk = require("sib-api-v3-sdk");
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  // Configure API key authorization: api-key
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "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";

  var apiInstance = new SibApiV3Sdk.ContactsApi();

  var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
  createContact = { email: "ysarum.ysa@gmail.com" };

  apiInstance.createContact(createContact).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error(error);
    }
  );
});

router.get("/EmailTest1", function (req, res, next) {
  var SibApiV3Sdk = require("sib-api-v3-sdk");
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "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";
  var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
  var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaigns.name = "Campaign sent via the API";
  emailCampaigns.subject = "My subject";
  emailCampaigns.sender = {
    name: "From name",
    email: "13218063@std.stei.itb.ac.id",
  };
  emailCampaigns.type = "classic";

  htmlContent: "Congratulations! You successfully sent this example campaign via the Sendinblue API.";
  recipients: "ysarum.ysa@gmail.com";

  apiInstance.createEmailCampaign(emailCampaigns).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error(error);
    }
  );
});
//Ketika menggunakan nilai id maka hanya mengambil satu nilai comment saja
//Kalo misalnya mau ambil semua nilai bisa langsung panggil comments semuanya

module.exports = router;
