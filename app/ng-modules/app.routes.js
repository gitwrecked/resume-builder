angular.module('app.routes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'ng-modules/upload/upload.template.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'ng-modules/login/login.template.html',
            controller: 'login.controller' 
        })
        .state('register', {
            url: '/register',
            templateUrl: 'ng-modules/register/register.template.html',
            controller: 'register.controller' 
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'ng-modules/upload/upload.template.html'
        })
        .state('home.register', {
            url: '/register',
            templateUrl: 'ng-modules/register/register.template.html',
            controller: 'register.controller'     
        })
        .state('home.login', {
            url: '/login',
            templateUrl: 'ng-modules/login/login.template.html',
            controller: 'login.controller'     
        });

}]);