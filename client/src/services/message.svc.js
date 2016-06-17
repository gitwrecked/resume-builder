//Service to call api to save messages
angular.module('resumebuilder.app').factory('messageSvc', [
    '$http',
    function($http) {
        return {
            sendMessage: function(message) {
                var promise = $http.post('api/message/save', message).then(function(res) {
                    return res.data;
                });
                return promise;
            }
        };
    }
]);