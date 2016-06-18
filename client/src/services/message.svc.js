//Service to call api to save messages
angular.module('resumebuilder.app').factory('messageSvc', [
    '$http',
    function($http) {
        return {
            sendMessage: function(message) {
                var promise = $http.post('api/messages', message).then(function(res) {
                    return res;
                });
                return promise;
            },
            getMessages: function() {
                var promise = $http.get('api/messages').then(function(res) {
                    return res;
                });
                return promise;
            }
        };
    }
]);