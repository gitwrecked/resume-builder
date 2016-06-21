// contact routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'src/app/contact/contactTmpl.html'
            })
            .state('about.contact', {
                url: '/contact',
                templateUrl: 'src/app/contact/contactTmpl.html'
            });
    }
]);