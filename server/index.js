 // External Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

// CONFIG
var AWS = require('aws-sdk');
var config = require('./config');


//Controllers

// Services


// Policies


// Express
var app = express();

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/../dist'));


//    Endpoints   //

//  Species

//  Careers

//  Specializations

//  Characters






//Connection
var mongoUri = config.MONGO_URI;
var port = config.PORT;

// mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('connected to monogdb at: ' + mongoUri);
});

app.listen(port, function(){
    console.log('listening on port: ' + port);
})
