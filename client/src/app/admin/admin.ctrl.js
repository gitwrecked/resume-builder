angular.module('resumebuilder.app').controller('admin.ctrl', [
    'messageSvc', 'resumeSvc',
    function(messageSvc, resumeSvc) {
        console.log('inside admin controller');
        var messages = messageSvc.getMessages();
    }
])