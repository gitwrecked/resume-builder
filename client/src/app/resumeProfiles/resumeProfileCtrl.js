// resume profile controller
angular.module('rbApp').controller('resumeProfilesCtrl', [
    '$scope', 'resumeProfileSvc', 'authSvc', '$log',
    function($scope, resumeProfileSvc, authSvc, $log) {

        $scope.currentUser = authSvc.user();

        var conditions = {
            email: window.btoa($scope.currentUser.email)
        };

        getProfiles(conditions);

        function getProfiles(conditions) {
            resumeProfileSvc.getProfiles($scope.currentUser, conditions).then(function(res) {
                $log.debug('called resume profile svc...' + JSON.stringify(res));
                $scope.profiles = res.profiles;
            }).catch(function(err) {
                //TODO add proper error handling, display message to user
                $log.error('error calling service: ' + err.message);
            });
        }

        $scope.selectedProfile = function(profile) {
            $log.debug('selected resume profile name: ' + profile.profileName);
            resumeProfileSvc.selectedProfile = profile;
        }
    }
]);