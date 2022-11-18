const { request } = require('express');
var express = require('express');


var app = express();

app.use(express.urlencoded({ extended: true }));

var mongoose = require('mongoose');

var port = 4444;
var db = 'mongodb://localhost:27017/VRProject';

mongoose.connect(db);



app.get('/',function(req,res){

    res.send('hello');

})

app.get('/register',function(res,req){

    

})

app.listen(port,function(err){
    
    console.log("Server listening on port" + port)

})