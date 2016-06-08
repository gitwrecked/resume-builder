// app routes ===================
// angular routes using ui.router, allows for nested views
angular.module('app.routes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'features/upload/upload.template.html',
            controller: 'upload.controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'features/login/login.template.html',
            controller: 'login.controller' 
        })
        .state('register', {
            url: '/register',
            templateUrl: 'features/register/register.template.html',
            controller: 'register.controller' 
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'features/upload/upload.template.html',
            controller: 'upload.controller'
        })
        .state('home.register', {
            url: '/register',
            templateUrl: 'features/register/register.template.html',
            controller: 'register.controller'     
        })
        .state('home.login', {
            url: '/login',
            templateUrl: 'features/login/login.template.html',
            controller: 'login.controller'     
        });

}]);