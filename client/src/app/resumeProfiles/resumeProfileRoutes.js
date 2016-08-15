// resumes profile routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('resumeProfiles', {
                url: '/resumeProfiles',
                templateUrl: 'src/app/resumeProfiles/resumeProfileTmpl.html',
                admin: false
            });
    }
]);