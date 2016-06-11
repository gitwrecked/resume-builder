// user service ===================
// angular service to handle user registration, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('resumebuilder.app').factory('UserService', ['$http', function($http) {
	 return {
        // make post call to create new user, need associated route in node/express routes
        createUser : function() {
            console.log('createUser: not implemented yet');
        },
        // make get call to retrieve user, need associated route in node/express routes
        getUser : function(user) {
            console.log('getUser: not implemented yet');
        }
    };       
}]);