// about routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp')
    .config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: 'src/app/about/aboutTmpl.html'
                })
                .state('about.site', {
                    url: '/site',
                    templateUrl: 'src/partials/siteTmpl.html'
                })
                .state('about.team', {
                    url: '/team',
                    templateUrl: 'src/partials/teamTmpl.html'
                });
        }
    ]);