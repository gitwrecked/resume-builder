// actions controller ===================
// angular controller to display user actions
angular.module('rbApp')
    .controller('actionsCtrl', [
        '$scope', '$state', '$mdBottomSheet', '$log',
        function($scope, $state, $mdBottomSheet, $log) {
            $scope.actions = [{
                name: 'Upload',
                action: 'upload',
                icon: 'fa fa-upload'
            }, {
                name: 'Contact',
                action: 'contact',
                icon: 'fa fa-comment'
            }];
            $scope.close = function() {
                $mdBottomSheet.hide();
            };
        }
    ]);