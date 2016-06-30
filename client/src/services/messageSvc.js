//Service to call api to save messages
angular.module('rbApp').factory('messageSvc', [
    '$http', '$log',
    function($http, $log) {
        return {
            sendMessage: function(message) {
                var promise = $http.post('api/message/save', message).then(function(res) {
                    return res;
                });
                return promise;
            }
        };
    }
]);