// user service ===================
// angular service to handle user registration, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('resumebuilder.app', []).factory('registerService', ['$http', function($http) {
	 return {
        // call to get all users
        get : function() {
            return $http.get('/api/users');
        },
        // these will work when more API routes are defined on the Node side of things
        create : function(user) {
            return $http.post('/api/users', user);
        },
        // call to DELETE a user
        delete : function(id) {
            return $http.delete('/api/users/' + id);
        }
    }       
}]);