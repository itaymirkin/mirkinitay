const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');





// var writeStream = fs.createWriteStream("accounts.xls");
//
// var header="Sl No"+"\t"+" username"+"\t"+"password"+"\n";
//  var row1 = "0"+"\t"+ i.usernamerR + "\t" + i.passwordR+"\n";
// // var row2 = "1"+"\t"+" 22"+"\t"+"bob"+"\n";
//
// writeStream.write(header);
// // writeStream.write(row1);
// // writeStream.write(row2);
//
// writeStream.close();






app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
})

app.use(bodyParser());

app.get('/', (req, res) => {
  console.log("got request");
  res.send('hello world');
})






app.post('/register', (req,res) => {
     i=req.body
     console.log(i);
     fs.appendFile('accounts.xls',"\n"+"0"+"\t"+ i.usernamerR + "\t" + i.passwordR , function (err) {
       if (err) throw err;
       console.log('Saved!');
     });



   })









app.post('/login', (req, res) => {
  loginDetails = req.body
  welcomeMessage = 'welcome ' + loginDetails.username
  console.log(loginDetails.username + ' connected');
  res.send(welcomeMessage)
  fs.readFile('accounts.xls')

})






app.listen(3000, () => {
    console.log('Starting server at port 3000');
})
