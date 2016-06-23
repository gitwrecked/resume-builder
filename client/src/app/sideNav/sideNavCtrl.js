angular.module('rbApp').controller('sideNavCtrl', [
    '$scope', '$mdSidenav', '$log',
    function($scope, $mdSidenav, $log) {
        $scope.close = function() {
            $log.debug('sideNavCtrl: closing sideNav');
            $mdSidenav('right').close();
        };
    }
]);