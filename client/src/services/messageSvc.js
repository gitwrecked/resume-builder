//Service to call api to save messages
angular.module('rbApp').factory('messageSvc', [
    '$http', '$log',
    function($http, $log) {
        return {
            sendMessage: function(message, user) {
                var req = {
                    method: 'POST',
                    url: 'api/messages/',
                    data: message
                };
                $log.debug('messageSvc.sendMessage request: ' + JSON.stringify(req));
                var promise = $http(req).then(function(res) {
                    $log.debug('messageSvc.sendMessage response: ' + JSON.stringify(res.data));
                    return res.data;
                });
                return promise;
            },
            getMessages: function(user) {
                var req = {
                    method: 'GET',
                    url: 'api/messages/',
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('messageSvc.getMessages request: ' + JSON.stringify(req));
                var promise = $http(req).then(function(res) {
                    $log.debug('messageSvc.getMessages response: ' + JSON.stringify(res.data));
                    return res.data;
                });
                return promise;
            },
            //TODO should probably change query to search by email instead of id
            getMessage: function(id, user) {
                var req = {
                    method: 'GET',
                    url: 'api/messages/'.concat(id),
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('messageSvc.getMessage request: ' + JSON.stringify(req));
                var promise = $http(req).then(function(res) {
                    $log.debug('messageSvc.getMessage response: ' + JSON.stringify(res.data));
                    return res.data;
                });
                return promise;
            },
            deleteMessage: function(id, user) {
                var req = {
                    method: 'DELETE',
                    url: 'api/messages/'.concat(id),
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('messageSvc.deleteMessage request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('messageSvc.deleteMessage response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            },
        };
    }
]);