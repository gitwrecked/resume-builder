// register controller ===================
// angular controller to handle user registration, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('register.module', []).controller('register.controller', ['$scope', '$http', function($scope, $http) {
	$scope.register = function(){
        $scope.registering = true;
		if(!$scope.formRegister.$valid){
            $scope.registering = false;
			return;
		}
		// make http request to node api routes as front doesn't have support for mongoose/mongo
       $http.post('/api/user/register', $scope.user).then(
    		function(res) {
    			$scope.message = res.data.msg;
                if(!res.data.success){
    				$scope.registering = false; 
    			}
       		}
    	);
	};
}]);