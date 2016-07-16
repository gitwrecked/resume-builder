// user service ===================
// angular service to get user data, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('rbApp').factory('userSvc', [
    '$http', '$log',
    function($http, $log) {
        return {
            // make post call to create new user, need associated route in node/express routes
            retrieveUsers: function() {
                var promise = $http.get('/api/users/').then( // make http request to node api
                    function(res) {
                        return res;
                    });
                return promise;
            }
        };
    }
]);