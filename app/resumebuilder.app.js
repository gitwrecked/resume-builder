// resumebuilder app ===================
// main app module with list of dependencies
// when adding new controllers/services, 
// add names here, and include in index.html imports 
angular.module('resumebuilder.app', [
	'ngRoute',
	'ui.router', 
	'app.routes', 
	'upload.controller',
	'login.controller',
	'register.controller'
	]);