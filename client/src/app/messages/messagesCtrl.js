// messages controller ===================
// angular controller to handle message management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('messagesCtrl', [
    '$scope', 'messageSvc', 'authSvc', '$log',
    function($scope, messageSvc, authSvc, $log) {

        getMessages();

        $scope.deleteMessage = function(message) { // delete message and refresh data
            var currentUser = authSvc.user();
            messageSvc.deleteMessage(message._id, currentUser).then(function(res) {
                getMessages();
            });
        };

        function getMessages() { // retrieve all messages
            var currentUser = authSvc.user();
            messageSvc.getMessages(currentUser).then(function(res) {
                $scope.messages = res.messages;
            });
        }
    }
]);