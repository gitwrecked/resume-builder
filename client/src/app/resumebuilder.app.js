// resumebuilder app ===================
// main app module with list of dependencies
// when adding new controllers/services, 
// add names here, and include in index.html imports 
angular.module('resumebuilder.app', [
        'ngRoute',
        'ui.router',
        'ngCookies',
        'ngMaterial',
        'ngMessages',
        'ngSanitize'
    ])
    .config(function($mdThemingProvider) { // initialize javascript libraries here if needed
        new WOW().init();
        $mdThemingProvider.theme('rb-default')
            .primaryPalette('grey')
            .accentPalette('light-blue');
    });