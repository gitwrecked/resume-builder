//Service to call api to save comments
angular.module('about')
    .factory('aboutContactService', ['$http', function ($http) {
        return {
            saveComment: function (comment) {
                var promise = $http.post('api/about/comment', comment).then(function (res) {
                    return res.data;
                });
                return promise;
            }
        }
}]);
