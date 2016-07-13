angular.module('rbApp').controller('adminCtrl', [
    '$scope', 'messageSvc', 'resumeSvc', 'authSvc',
    function($scope, messageSvc, resumeSvc, authSvc) {

        var currentUser = authSvc.user();

        $scope.actions = [{
            name: 'Dashboard',
            sref: 'admin.dashboard'
        }, {
            name: 'Resumes',
            sref: 'admin.resumes'
        }, {
            name: 'Messages',
            sref: 'admin.messages'
        }];
    }
]);