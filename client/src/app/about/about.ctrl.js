// about controller ===================
// angular controller to handle about section nav
angular.module('resumebuilder.app')
    .controller('about.ctrl', [
        '$scope', '$state',
        function($scope, $state) {
            $state.go('about.site');
            $scope.tab = 0;
            $scope.selectTab = function(tab) {
                $scope.tab = tab;
            };
        }
    ]);