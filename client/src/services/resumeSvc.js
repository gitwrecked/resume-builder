// resume service ===================
// angular service to handle resume, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('rbApp').factory('resumeSvc', [
    '$http', '$log',
    function($http, $log) {
        var globalMap;
        return {
            // make get call to retrieve user resumes, need associated route in node/express routes
            getResumes: function(user) {
                var req = {
                    method: 'GET',
                    url: '/api/resumes/',
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeSvc.getResumes request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('resumeSvc.getResumes response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            },
            // make get call to retrieve one user resume, need associated route in node/express routes
            // TODO can user upload more then one resume??? How to determine which resume to retrieve?
            // TODO should probably change query to search by email instead of id
            getResume: function(id, user) {
                var req = {
                    method: 'GET',
                    url: '/api/resumes/'.concat(id),
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeSvc.getResume request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('resumeSvc.getResume response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            },
            // make post call to upload resume, need associated route in node/express routes
            uploadResume: function(resume, user) {
                var req = {
                    method: 'POST',
                    url: '/api/resumes/',
                    headers: {
                        'rb_token': user.token
                    },
                    data: resume
                };
                $log.debug('resumeSvc.uploadResume request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('resumeSvc.uploadResume response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            },
            // make post call to delete resume, need associated route in node/express routes
            deleteResume: function(id, user) {
                var req = {
                    method: 'DELETE',
                    url: '/api/resumes/'.concat(id),
                    headers: {
                        'rb_token': user.token
                    }
                };
                $log.debug('resumeSvc.deleteResume request: ' + JSON.stringify(req));
                var promise = $http(req).then(
                    function(res) {
                        $log.debug('resumeSvc.deleteResume response: ' + JSON.stringify(res.data));
                        return res.data;
                    });
                return promise;
            },
            editResume: function(resume) {
                var jsonData = {};
                //lazy loading 
                if (!globalMap) {
                    globalMap = this.createMap();
                }
                for (var key in resume) {
                    var resumeSnippet = resume[key];
                    resumeSnippet = this.cycleMap(resumeSnippet, this.wordInString);
                    jsonData[key] = resumeSnippet;
                }
                return jsonData;
            },
            cycleMap: function(resumeSnippet, wordInString) {
                globalMap.forEach(function(value, key) {
                    if (wordInString(resumeSnippet, value)) {
                        resumeSnippet = resumeSnippet.replace(value, key);
                    }
                }, globalMap);
                return resumeSnippet;
            },
            wordInString: function(s, word) {
                return new RegExp('\\b' + word + '\\b', 'i').test(s);
            },
            //where to put this? because it's going to keep growing... :D get it..
            createMap: function() {
                var thesaurusMap = new Map();
                thesaurusMap.set("bringing about", "fueling");
                thesaurusMap.set("immediate", "swift");
                return thesaurusMap;
            }
        };
    }
]);