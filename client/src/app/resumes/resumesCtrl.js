// resumes controller ===================
// angular controller to handle resume management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('resumesCtrl', [
    '$scope', 'resumeSvc', 'authSvc', '$log',
    function($scope, resumeSvc, authSvc, $log) {

        getResumes();

        $scope.deleteResume = function(resume) { // delete resume and refresh data
            var currentUser = authSvc.user();
            $log.debug('resumesCtrl:  resumeSvc.deleteResume: ' + JSON.stringify(currentUser));
            resumeSvc.deleteResume(resume._id, currentUser).then(function(res) {
                $log.debug('resumesCtrl:  resumeSvc.deleteResume response: ' + JSON.stringify(res.data));
                getResumes();
            });
        };

        function getResumes() { // retrieve all resums
            var currentUser = authSvc.user();
            $log.debug('resumesCtrl: resumeSvc.getResumes: ' + JSON.stringify(currentUser));
            resumeSvc.getResumes(currentUser).then(function(res) {
                $log.debug('resumesCtrl: resumeSvc.getResumes response: ' + JSON.stringify(res));
                $scope.resumes = res.resumes;
            });
        }
    }
]);