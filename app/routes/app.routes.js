// app routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/upload/upload.template.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.template.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'components/register/register.template.html'
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'components/upload/upload.template.html'
        });
}]);