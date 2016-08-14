// resume profile service
// angular service to handle creation and modification to resume profiles, 
angular.module('rbApp').factory('resumeProfileSvc', [
    '$http', '$log',
    function($http, $log) {
        return {
            // make get call to retrieve user resumes, need associated route in node/express routes
            getProfile: function(profileId, user) {
                var req = {
                    method: 'GET',
                    url: '/api/resumeProfiles/'.concat(profileId),
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeProfileSvc.getProfile request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function successCallback(res) {
                        $log.debug('resumeProfileSvc.getProfile response: ' + JSON.stringify(res.data));
                        return res.data;
                    },
                    function failCallback(res) {
                        $log.error('resumeProfileSvc.getProfile error: ' + JSON.stringify(res.data));
                        throw new Error('request failed');
                    });
                return promise;
            },
            getProfiles: function(user, conditions) {
                var req = {
                    method: 'GET',
                    url: '/api/resumeProfiles',
                    params: conditions,
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeProfileSvc.getProfiles req: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function successCallback(res) {
                        $log.debug('resumeProfileSvc.getProfiles res: ' + JSON.stringify(res.data));
                        return res.data;
                    },
                    function failCallback(res) {
                        $log.error('resumeProfileSvc.getProfiles err: ' + JSON.stringify(res.data));
                        throw new Error('request failed');
                    });
                return promise;
            }
        };
    }
]);