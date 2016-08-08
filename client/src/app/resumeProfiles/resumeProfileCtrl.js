// resume profile controller
angular.module('rbApp').controller('resumeProfilesCtrl', [
    '$scope', 'resumeProfileSvc', 'authSvc', '$log',
    function($scope, resumeProfileSvc, authSvc, $log) {

        $scope.currentUser = authSvc.user();
        getProfiles();

        var conditions = {
            email: window.btoa($scope.currentUser.email)
        };

        function getProfiles() {
            resumeProfileSvc.getProfiles($scope.currentUser, conditions).then(function(res) {
                $scope.profiles = res.profiles;
                $log.debug('profiles: ' + JSON.stringify($scope.profiles));
            }).catch(function(err) {
                $log.error('error calling service: ' + err.message);
            });
        }
    }
]);