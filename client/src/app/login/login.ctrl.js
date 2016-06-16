// login controller ===================
// angular controller to handle user login, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('resumebuilder.app').controller('login.ctrl', [
    '$scope', '$state', 'authSvc',
    function($scope, $state, authSvc) {
        $scope.login = function() {
            $scope.loggingin = true;
            if (!$scope.formLogin.$valid) { // call form by name to check if form valid
                $scope.loggingin = false;
                return;
            }
            authSvc.login($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                $scope.message = res.data.msg;
                if (!res.data.success) {
                    $scope.loggingin = false;
                } else {
                    setTimeout(function() {
                        $state.go('upload');
                    }, 2000);
                }
            });
        };
    }
]);