// nav controller ===================
// angular controller to handle nav, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('navCtrl', [
    '$scope', 'authSvc', '$mdSidenav', '$log',
    function($scope, authSvc, $mdSidenav, $log) {
        $scope.currentUser = authSvc.user();
        $scope.$watch(authSvc.user, function() {
            $scope.currentUser = authSvc.user();
        }, true);
        $scope.logout = function() {
            $scope.currentUser = "";
            authSvc.logout();
        };

        //TODO check user role instead of just user is logged in
        $scope.isAdmin = function() {
            return $scope.currentUser;
        };

        $scope.isAuthenticated = function() {
            return $scope.currentUser;
        };
        $scope.toggleRight = buildToggler('right');

        function buildToggler(navId) {
            return function() {
                $mdSidenav(navId).toggle();
            };
        }
    }
]);