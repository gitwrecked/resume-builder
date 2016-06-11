// resume service ===================
// angular service to handle resume, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('resume.module', []).factory('resumeService', ['$http', function($http) {
	 return {
        // make get call to retrieve user resumes, need associated route in node/express routes
        getResumes : function() {
            console.log('getResumes: not implemented yet');
        },
        // make get call to retrieve one user resume, need associated route in node/express routes
        getResume : function(user) {
            console.log('getResume: not implemented yet');
        },
        // make post call to upload resume, need associated route in node/express routes
        uploadResume : function(resume) {
            console.log('uploadResume: not implemented yet');
        },
        // make post call to delete resume, need associated route in node/express routes
        deleteResume : function(resume) {
            console.log('deleteResume: not implemented yet');
        }
    };       
}]);