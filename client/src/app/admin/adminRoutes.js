angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'src/app/admin/adminTmpl.html'
            });
    }
]);