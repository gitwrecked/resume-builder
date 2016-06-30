// login controller ===================
// angular controller to handle user login, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('loginCtrl', [
    '$scope', '$state', 'authSvc', '$mdBottomSheet', '$mdToast', '$log',
    function($scope, $state, authSvc, $mdBottomSheet, $mdToast, $log) {
        $scope.loggingin = false;
        $scope.loggedin = false;
        $scope.login = function() {
            $scope.loggingin = true;
            $log.debug('loginCtrl: authSvc.login: ' + JSON.stringify($scope.user));
            setTimeout(function() {
                authSvc.login($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                    $log.debug('loginCtrl: authSvc.login response: ' + JSON.stringify(res.data));
                    $scope.message = res.data.msg;
                    if (res.data.success) {
                        $scope.loggedin = true;
                        $scope.showActions();
                    }
                    $scope.loggingin = false;
                    // $state.go('upload');
                    // $mdToast.show(
                    //     $mdToast.simple()
                    //     .textContent('logged in ' + res.data.email + '!')
                    //     .position('top right')
                    //     .hideDelay(1500)
                    // );
                });
            }, 2000);
        };
        $scope.showActions = function() {
            $mdBottomSheet.show({
                templateUrl: 'src/app/actions/actionsTmpl.html',
                clickOutsideToClose: false
            });
        };
    }
]);