// app routes ===================
// angular routes using ui.router, allows for nested views
angular.module('app.routes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/upload/upload.template.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.template.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'modules/register/register.template.html'
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'modules/upload/upload.template.html'
        });
}]);