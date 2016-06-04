// upload controller ===================
// angular controller to handle resume upload
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('upload.controller', []).controller('upload.controller', function($scope) {
	$scope.message = 'upload.controller';	
});