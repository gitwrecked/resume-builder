// resume service ===================
// angular service to handle resume, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('resumebuilder.app').factory('resumeSvc', [
    '$http',
    function($http) {
        var globalMap;
        return {
            // make get call to retrieve user resumes, need associated route in node/express routes
            getResumes: function() {
                console.log('getResumes: not implemented yet');
            },
            // make get call to retrieve one user resume, need associated route in node/express routes
            getResume: function(user) {
                console.log('getResume: not implemented yet');
            },
            // make post call to upload resume, need associated route in node/express routes
            uploadResume: function(resume) {
                var promise = $http.post('/api/resume/upload', resume).then(
                    function(res) {
                        return res;
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
            // make post call to delete resume, need associated route in node/express routes
            deleteResume: function(resume) {
                console.log('deleteResume: not implemented yet');
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