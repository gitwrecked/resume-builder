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
                    url: '/api/resumeProfiles/' + profileId,
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeProfileSvc.getProfile request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('resumeProfileSvc.getProfile response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            }
        };
    }
]);