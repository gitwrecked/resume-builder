// register routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'src/app/register/register.tmpl.html'
            });
    }
]);