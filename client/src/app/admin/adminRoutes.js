angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'src/app/admin/adminTmpl.html'
                    // controller: 'adminCtrl'
            })
            .state('admin.dashboard', {
                url: '/dashboard',
                templateUrl: 'src/app/admin/dashboard/adminDashboardTmpl.html'
            })
            .state('admin.resumes', {
                url: '/resumes',
                templateUrl: 'src/app/admin/resumes/adminResumesTmpl.html'
            })
            .state('admin.messages', {
                url: '/messages',
                templateUrl: 'src/app/admin/messages/adminMessagesTmpl.html'
            });
    }
]);