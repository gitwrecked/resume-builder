// angular routes ===================
// different from routes.js, appRoutes 
// controls template views and controllers.
// when creating a controller, make sure to add it here 
// for the associated template
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/client/uploadForm.html',
			controller: 'ResumeBuilderController'
		})

	$locationProvider.html5Mode(true);
}]);