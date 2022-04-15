var fs= require('fs');

var express = require('express');
var path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/',function (req,res){
  res.sendFile(path.join(__dirname,'/db.json'));
});
app.listen(7070 ,()=>{
  console.log ('express app listening on port http://localhost:7070')
})