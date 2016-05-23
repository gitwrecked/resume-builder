//server.js

//set up ========================================
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

//configuration =================================
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//routes =============================
app.get('/contactList', function(request, response){

	console.log("testing");

});

//listen (start app with node server.js listening on port 3000)
var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})
