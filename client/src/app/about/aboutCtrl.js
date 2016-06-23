// about controller ===================
// angular controller to handle about section nav
angular.module('rbApp')
    .controller('aboutCtrl', [
        '$scope', '$state', '$log',
        function($scope, $state, $log) {
            $scope.tab = 0;
            $state.go('about.site');
            $scope.selectTab = function(tab) {
                $scope.tab = tab;
            };
        }
    ]);