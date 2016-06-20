// login controller ===================
// angular controller to handle user login, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('loginCtrl', [
    '$scope', '$state', 'authSvc', '$log',
    function($scope, $state, authSvc, $log) {
        $scope.login = function() {
            $scope.loggingin = true;
            $log.debug('loginCtrl: authSvc.login: ' + JSON.stringify($scope.user));
            authSvc.login($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                $log.debug('loginCtrl: authSvc.login response: ' + JSON.stringify(res.data));
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