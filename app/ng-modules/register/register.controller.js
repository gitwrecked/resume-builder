angular.module('register.controller', []).controller('register.controller', ['$scope', '$http', function($scope, $http) {
	$scope.user = {};
	$scope.message;
	$scope.register = function(){
        $scope.registering = true;
		if(!$scope.formRegister.$valid){
            $scope.registering = false;
			return;
		}
		// make http request to node api routes as front doesn't have support for mongoose/mongo
       $http.post('/api/users', $scope.user).then(
    		//first function handles success
    		function(res) {
                console.log("mongo return code: " + res.data.code);
    			if(res.data.code === 0){
    				$scope.message = "registered " + $scope.user.email;
    			} else {
    				switch(res.data.code) {
    					case 11000:
    						$scope.message = "user already exists";
    						break;
    					default:
    						$scope.message = "failed to register user";
    						break;
    				}
                    $scope.registering = false; 
    			}

       		}
    	);
	};
}]);