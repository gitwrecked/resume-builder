// resumes controller ===================
// angular controller to handle resume management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('resumeCtrl', [
    '$scope', 'resumeSvc', 'authSvc', '$log', 'resumeProfileSvc',
    function($scope, resumeSvc, authSvc, $log, resumeProfileSvc) {

        $scope.currentUser = authSvc.user();
        $scope.profile = resumeProfileSvc.selectedProfile;

        $scope.tabs = [{
            title: 'original',
            content: {}
        }, {
            title: 'modified',
            content: {}
        }];

        //Get original and modified resumes
        getResume($scope.profile.originalResume).then(function(res) {
            $scope.tabs[0].content = res;
        });
        getResume($scope.profile.modifiedResume).then(function(res) {
            $scope.tabs[1].content = res;
        });

        function getResume(id) {
            var promise = resumeSvc.getResume(id, $scope.currentUser).then(function(res) {
                return res.resume;
            }).catch(function(err) {
                //TODO display error message to user
                $log.error('error calling resume svc: ' + err.message);
            });
            return promise;
        }
    }
]);