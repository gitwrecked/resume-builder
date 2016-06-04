var path 	    = require('path');
var Users 		= require(path.join(__dirname + '/app/models/users'));
var Resumes 	= require(path.join(__dirname + '/app/models/resumes'));

module.exports = function(app) {
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname + '/app/index.html'));
	});

	app.post('/api/users', function(req, res) {
		Users.create({
			email: req.body.email,
		    password: req.body.password
		}, 
		function(err){
			if (err) {
		  		res.status(200).json({code: err.code}); 
		  		return;
		  	}
		  	res.status(200).json({code:0});  
		});
    });

    app.get('/api/users', function(req, res) {
		Users.findOne({
			email: req.body.email,
		    password: req.body.password
		}, 
		function(err, user){
			if (err) {
		  		res.json({}); 
		  		return;
		  	}
		  	res.json(user);  
		});
    });
};