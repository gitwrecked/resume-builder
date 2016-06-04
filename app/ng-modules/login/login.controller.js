// login controller ===================
// angular controller to handle user login, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('login.controller', []).controller('login.controller', ['$scope', '$http', function($scope, $http) {
	$scope.user = {};
	$scope.message;
	$scope.login = function(){
        $scope.loggingin = true;
		if(!$scope.formLogin.$valid){ // call form by name to check if form valid
            $scope.loggingin = false;
			return;
		}
       $http.post('/api/user/login', $scope.user).then( // make http request to node api
    		function(res) {    
                $scope.message = res.data.msg;
                if(!res.data.success){
                    $scope.loggingin = false; 
                }
       		}
    	);
	};
}]);