// modules 
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path 		   = require('path');

// configuration 
var project = require('./config/project');
console.log("configuring " + project.resumeBuilder.name + ", Version " + project.resumeBuilder.version);

// connect to mongo db, 
// connect to mongo lab if server config var exists
var mongoURI = process.env.MONGOLAB_URI;
if (mongoURI) {
	mongoose.connect(mongoURI); 
} else {
	var db = require('./config/db');
	mongoose.connect(db.url);
}
	
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request.
app.use(express.static(__dirname + '/public')); // set the static files location 

require('./app/routes')(app); // routes 
var port = process.env.PORT || 3001; // set our port
app.listen(port); // start app 	
console.log('view in browser at http://localhost:' + port); // inform user

exports = module.exports = app; // expose app