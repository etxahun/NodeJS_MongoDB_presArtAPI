var express = require('express');
var bodyParser = require('body-parser');
var presiones = require('./routes/presiones');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='presionArterial';
var connectionString='mongodb://localhost:27017/'+dbName;
mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', presiones);

module.exports = app;
