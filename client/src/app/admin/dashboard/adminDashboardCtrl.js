angular.module('rbApp').controller('adminDashboardCtrl', [
    '$scope', 'userSvc',
    function($scope, userSvc) {

        getUsers();

        function getUsers() {
            userSvc.retrieveUsers().then(function(response) {
                $scope.users = response.data.users;
            });
        }
    }
]);