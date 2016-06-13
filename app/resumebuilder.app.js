// resumebuilder app ===================
// main app module with list of dependencies
// when adding new controllers/services, 
// add names here, and include in index.html imports 
angular.module('resumebuilder.app', [
    'ngRoute',
    'ui.router',
    'about'
])
    .config(function () { // initialize javascript libraries here if needed
        new WOW().init();
    });

angular.module('about', []);
