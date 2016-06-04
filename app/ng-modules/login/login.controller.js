angular.module('login.controller', []).controller('login.controller', ['$scope', '$http', function($scope, $http) {
	$scope.user = {};
	$scope.message;
	$scope.login = function(){
        $scope.loggingin = true;
		if(!$scope.formLogin.$valid){
            $scope.loggingin = false;
			return;
		}
		// make http request to node api routes as front doesn't have support for mongoose/mongo
       $http.get('/api/users', $scope.user).then(
    		//first function handles success
    		function(res) {      
    			console.log(res);
    			if(res.data){     
    				$scope.message = 'logged in!';
    				$scope.loggingin = true;
    			} else {
    				$scope.message = 'invalid user';
    			}
       		}
    	);
	};
}]);