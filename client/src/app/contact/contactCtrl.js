// contact controller ===================
// angular controller to send user messages, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('contactCtrl', [
    '$scope', 'messageSvc', '$log',
    function($scope, messageSvc, $log) {
        $scope.submitted = false;
        $scope.send = function() {
            $scope.submitting = true;
            $scope.contact.date = Date.now();
            $log.debug('contactCtrl: messageSvc.sendMessage: ' + JSON.stringify($scope.contact));
            messageSvc.sendMessage($scope.contact).then(function(resData) {
                $scope.response = resData;
                $log.debug('contactCtrl: messageSvc.sendMessage response: ' + JSON.stringify(resData));
                $scope.contact = "";
                            $scope.formContact.$setPristine();
            $scope.formContact.$setUntouched();
                $scope.submitting = false;
                $scope.submitted = true;
            });
        };
    }
]);