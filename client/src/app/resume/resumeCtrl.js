// resumes controller ===================
// angular controller to handle resume management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('resumeCtrl', [
    '$scope', 'resumeSvc', 'authSvc', '$log', 'resumeProfileSvc', '$stateParams',
    function($scope, resumeSvc, authSvc, $log, resumeProfileSvc, $stateParams) {

        $scope.currentUser = authSvc.user();

        $scope.tabs = [{
            title: 'original',
            content: {}
        }, {
            title: 'modified',
            content: {}
        }];

        resumeProfileSvc.getProfile($stateParams.profileId, $scope.currentUser).then(function(res) {
            $scope.tabs[0].content = res.profile.originalResume;
            $scope.tabs[1].content = res.profile.modifiedResume;
        }).catch(function(err) {
            //TODO display error message to user
            $log.error('error calling resume svc: ' + err.message);
        });
    }
]);