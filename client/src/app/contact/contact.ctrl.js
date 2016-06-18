// contact controller ===================
// angular controller to send user messages, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('resumebuilder.app').controller('contact.ctrl', [
    '$scope', 'messageSvc',
    function($scope, messageSvc) {

        $scope.send = function() {
            $scope.submitting = true;
            $scope.contact.date = Date.now();
            $scope.contact = $scope.contact;
            messageSvc.sendMessage($scope.contact).then(function(resData) {
                $scope.response = resData.data;
            });
            $scope.contact = null;
            $scope.formContact.$setPristine();
            $scope.submitting = false;
        };
    }
]);