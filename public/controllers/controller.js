var myApp = angular.module('resume_editor', ['ui.bootstrap']);

myApp.controller('appCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {
	console.log("Hello World from controller");

	$scope.animationsEnabled = true;

}]);


