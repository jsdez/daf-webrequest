var https = require('follow-redirects').https;

var fs = require('fs');
 
var options = {

  'method': 'POST',

  'hostname': 'api-qa.digital.paccar.cloud',

  'path': '/sap/api/v1/hr/hr011?sap-client=170',

  'headers': {

    'apikey': 'YWkSAHkgxEvwMTjKpG3KHG6H8osmzwJGV7LtezhAOgbONLLv',

    'Content-Type': 'application/json',

    'Authorization': 'Bearer ZvQSs5MjJUfGfM1I6A8GnAhLT0bB',

    'Cookie': 'sap-usercontext=sap-client=170'

  },

  'maxRedirects': 20

};
 
var req = https.request(options, function (res) {

  var chunks = [];
 
  res.on("data", function (chunk) {

    chunks.push(chunk);

  });
 
  res.on("end", function (chunk) {

    var body = Buffer.concat(chunks);

    console.log(body.toString());

  });
 
  res.on("error", function (error) {

    console.error(error);

  });

});
 
var postData = JSON.stringify({

  "d": {

    "__metadata": {

      "id": "https://ehvt021ib.eu.paccar.com:1443/sap/opu/odata/sap/Z_HR_NINTEX_SRV/NAW_DETAILS_UPDSet",

      "uri": "https://ehvt021ib.eu.paccar.com:1443/sap/opu/odata/sap/Z_HR_NINTEX_SRV/NAW_DETAILS_UPDSet",

      "type": "Z_HR_NINTEX_SRV.NAW_DETAILS_UPD"

    },

    "Form": "HR011",

    "Begda": "20250815",

    "ActionReason": "07",

    "Pernr": "00260090",

    "Operation": "1",

    "Email": "skmooib@mooi.be",

    "EmailGebruiker": "ronald.hulskamp@daftrucks.com"

  }

});
 
req.write(postData);
 
req.end();
 