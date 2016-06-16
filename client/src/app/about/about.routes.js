// about routes ===================
// angular routes using ui.router, allows for nested views
angular.module('resumebuilder.app')
    .config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: 'src/app/about/about.tmpl.html'
                })
                .state('about.site', {
                    url: '/site',
                    templateUrl: 'src/partials/site.tmpl.html'
                })
                .state('about.team', {
                    url: '/team',
                    templateUrl: 'src/partials/team.tmpl.html'
                });
        }
    ]);