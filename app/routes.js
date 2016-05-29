// routes ===================
// route to handle all angular requests
// '*' catches all urls, and routes to 'public/index.html'
module.exports = function(app) {
	app.get('*', function(req, res) {
		//res.sendfile('./public/index.html');
		res.sendFile('public/index1.html');
	});
};