angular.module('resumebuilder.app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'src/app/admin/admin.tmpl.html'
            });
    }
]);