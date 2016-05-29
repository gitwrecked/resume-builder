// angular controller ===================
// use to create controller and assign scope level variables
angular.module('ResumeBuilderCtrl', []).controller('ResumeBuilderController', function($scope) {
	$scope.textVar = 'this is a scope variable used like this: {{ textVar }}';	
});