// auth service ===================
// angular service to handle user login/register/logout, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('resumebuilder.app').factory('authSvc', [
    '$http', '$cookies',
    function($http, $cookies) {
        var currentUser = {};
        return {
            // make post call to create new user, need associated route in node/express routes
            login: function(user) {
                var promise = $http.post('/api/auth/login', user).then( // make http request to node api
                    function(res) {
                        var user = {
                            email: res.data.email,
                            token: res.data.token
                        };
                        currentUser = user;
                        $cookies.put('currentUser', JSON.stringify(user));
                        return res;
                    });
                return promise;
            },
            // make get call to retrieve user, need associated route in node/express routes
            register: function(user) {
                var promise = $http.post('/api/auth/register', user).then(
                    function(res) {
                        var user = {
                            email: res.data.email,
                            token: res.data.token
                        };
                        currentUser = user;
                        $cookies.put('currentUser', user);
                        return res;
                    });
                return promise;
            },
            user: function() {
                var user = $cookies.get('currentUser');
                if(!user){
                    return currentUser;
                }
                return JSON.parse(user);
                
            },
            logout: function() {
                currentUser = {};
                $cookies.remove('currentUser');

            }
        };
    }
]);