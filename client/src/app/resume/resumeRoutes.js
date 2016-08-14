// resumes routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('resume', {
                url: '/resume',
                templateUrl: 'src/app/resume/resumeTmpl.html',
                admin: false // protected route for admins only
            });
    }
]);