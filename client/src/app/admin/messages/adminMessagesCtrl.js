angular.module('rbApp').controller('adminMsgCtrl', [
    '$scope', 'messageSvc', 'authSvc',
    function($scope, messageSvc, authSvc) {
        var currentUser = authSvc.user();

        getMessages();

        // Delete message and refresh data
        $scope.deleteMsg = function(message) {
            messageSvc.deleteMessage(message._id).then(function(response) {
                getMessages();
            });
        };

        function getMessages() {
            messageSvc.getMessages().then(function(response) {
                $scope.messages = response.data.messages;
            });
        }
    }
]);