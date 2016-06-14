// upload controller ===================
// angular controller to handle resume upload, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('resumebuilder.app').controller('upload.controller', ['$scope','$http','resumeService',function($scope,$http,resumeService) {
	$scope.upload = function(){
    $scope.resume.editedResume = resumeService.uploadResume($scope.resume);
		$scope.uploading = true;
		if(!$scope.formUpload.$valid){ // validation needs to be extracted to either service or directives
      $scope.uploading = false;
			return;
		}
    if(!$scope.resume){ // validation needs to be extracted to either service or directives
      $scope.message = "Please update the form.."
      $scope.uploading = false; 
      return;
    } 
    $scope.resume.email = 'test@email.com';
    // make http request to node api routes as front doesn't have support for mongoose/mongo
    // ideally call injected resume service to upload resume

    $http.post('/api/resume/upload', $scope.resume).then( function(res) { 
      console.log("logging scope: "+ JSON.stringify($scope.resume));
      $scope.message = res.data.msg;
      if(!res.data.success){
         $scope.uploading = false; 
      }
    }); 
	};
}]);