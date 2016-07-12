// nav controller ===================
// angular controller to handle nav, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('navCtrl', [
    '$scope', '$state', 'authSvc', '$mdDialog', '$mdBottomSheet', '$log',
    function($scope, $state, authSvc, $mdDialog, $mdBottomSheet, $log) {
        $scope.currentUser = authSvc.user();
        $scope.$watch(authSvc.user, function() {
            $scope.currentUser = authSvc.user();
        }, true);
        $scope.logout = function() {
            $scope.currentUser = "";
            authSvc.logout();
            $state.go('login');
        };
        $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        $scope.showActions = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'src/app/actions/actionsTmpl.html',
                clickOutsideToClose: true
            });
        };
        $scope.isAdmin = function() {
            return $scope.currentUser.admin;
        };

        $scope.isAuthenticated = function() {
            return $scope.currentUser;
        };
    }
]);