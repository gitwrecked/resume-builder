// user service ===================
// angular service to get user data, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('rbApp').factory('userSvc', [
    '$http', '$log',
    function($http, $log) {
        return {
            // make post call to create new user, need associated route in node/express routes
            retrieveUsers: function(user) {
                var req = {
                    method: 'GET',
                    url: '/api/users/',
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('userSvc.retrieveUsers request: ' + JSON.stringify(req));
                var promise = $http(req).then( // make http request to node api
                    function(res) {
                        $log.debug('userSvc.retrieveUsers response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            }
        };
    }
]);