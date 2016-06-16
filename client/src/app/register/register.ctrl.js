// register controller ===================
// angular controller to handle user registration, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('resumebuilder.app').controller('register.ctrl', [
    '$scope', '$state', 'authSvc',
    function($scope, $state, authSvc) {
        $scope.register = function() {
            $scope.registering = true;
            if ($scope.user.password !== $scope.user.passwordConfirm) { // remove validation here
                $scope.message = "Passwords don't match...";
                $scope.registering = false;
                return;
            }

            authSvc.register($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                $scope.message = res.data.msg;
                if (!res.data.success) {
                    $scope.registering = false;
                } else {
                    setTimeout(function() {
                        $state.go('upload');
                    }, 2000);
                }
            });
        };
    }
]);