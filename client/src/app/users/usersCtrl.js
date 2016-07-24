// users controller ===================
// angular controller to handle user resume submissions, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('usersCtrl', [
    '$scope', 'authSvc', 'userSvc', '$log',
    function($scope, authSvc, userSvc, $log) {

        getUsers();

        function getUsers() { // retrieve all users
            var currentUser = authSvc.user();
            userSvc.retrieveUsers(currentUser).then(function(res) {
                $scope.users = res.users;
            });
        }
    }
]);