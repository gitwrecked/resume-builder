// main controller ===================
angular.module('rbApp').controller('mainCtrl', [
    '$scope', '$state', 'authSvc', '$log',
    function($scope, $state, authSvc, $log) {
        $scope.isAuthenticated = function() {
            return authSvc.isAuthenticated();
        };
    }
]);