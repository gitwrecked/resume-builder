// app routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/app/upload/upload.tmpl.html'
            });
    }
]);