/*
 *Configures about module for nested routes.
 */
angular.module('about')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('about.site');
        $stateProvider
            .state('about.site', {
                url: '/about-site',
                templateUrl: 'components/about/aboutSite/about.site.html'
            })
            .state('about.team', {
                url: '/about-team',
                templateUrl: 'components/about/aboutTeam/about.team.html'
            })
            .state('about.contact', {
                url: '/contact-us',
                templateUrl: 'components/about/contact/about.contact.html'
            })
    }]);
