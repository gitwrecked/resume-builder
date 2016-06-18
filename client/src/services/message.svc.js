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
            },
            //TODO should probably change query to search by email instead of id
            getMessage: function(id) {
                var promise = $http.get('api/messages/' + id).then(function(res) {
                    return res;
                });
                return promise;
            },
            deleteMessage: function(id) {
                var promise = $http.delete('/api/messages/' + id).then(
                    function(res) {
                        return res;
                    });
                return promise;
            },
        };
    }
]);