// contact routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'src/app/contact/contact.tmpl.html'
            })
            .state('about.contact', {
                url: '/contact',
                templateUrl: 'src/app/contact/contact.tmpl.html'
            });
    }
]);