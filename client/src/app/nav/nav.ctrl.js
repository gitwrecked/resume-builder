// nav controller ===================
// angular controller to handle nav, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('resumebuilder.app').controller('nav.ctrl', [
    '$scope', 'authSvc',
    function($scope, authSvc) {
        $scope.currentUser = authSvc.user();
        $scope.$watch(authSvc.user, function() {
            $scope.currentUser = authSvc.user();
        }, true);
        $scope.logout = function() {
            $scope.currentUser = "";
            authSvc.logout();
        };

        //TODO check user role instead of just user is logged in
        $scope.isAdmin = function () {
            return $scope.currentUser;
        };

        $scope.isAuthenticated = function () {
            return $scope.currentUser;
        };
    }
]);