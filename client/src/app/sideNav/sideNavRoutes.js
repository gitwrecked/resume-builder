// about routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp')
    .config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('nav', {
                    url: '/nav',
                    templateUrl: 'src/app/sideNav/sideNavTmpl.html'
                })
                .state('nav.login', {
                    url: '/login',
                    templateUrl: 'src/app/login/loginTmpl.html'
                })
                .state('nav.register', {
                    url: '/register',
                    templateUrl: 'src/app/register/registerTmpl.html'
                });
        }
    ]);