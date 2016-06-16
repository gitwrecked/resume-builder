// login routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'src/app/login/login.tmpl.html'
            });
    }
]);