// upload controller ===================
// angular controller to handle resume upload, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('uploadCtrl', [
    '$scope', '$http', 'resumeSvc', 'authSvc', '$log',
    function($scope, $http, resumeSvc, authSvc, $log) {
        $scope.uploading = false;
        $scope.uploaded = false;
        $scope.currentUser = authSvc.user();
        $scope.upload = function() {
            $scope.uploading = true;
            if (!$scope.currentUser) {
                $scope.message = "please login first...";
                $scope.uploading = false;
                return;
            }
            if (!$scope.resume) { // validation needs to be extracted to either service or directives
                $scope.message = "please update the form...";
                $scope.uploading = false;
                return;
            }
            var obj = {
                token: $scope.currentUser.token,
                email: $scope.currentUser.email,
                resume: $scope.resume,
                editedResume: resumeSvc.editResume($scope.resume)
            };
            $log.debug('uploadCtrl: resumeSvc.uploadResume: ' + JSON.stringify(obj));

            setTimeout(function() { // pausing execution to show loading bar, remove when moving to prod
                // make service call to node api routes as front doesn't have support for mongoose/mongo
                resumeSvc.uploadResume(obj).then(function(res) {
                    $log.debug('uploadCtrl: resumeSvc.uploadResume response: ' + JSON.stringify(res.data));
                    $scope.message = res.data.msg;
                    if (res.data.success) {
                        $scope.uploaded = true;
                    }
                    $scope.uploading = false;
                });
            }, 2000);

        };
    }
]);