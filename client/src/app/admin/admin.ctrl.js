angular.module('resumebuilder.app').controller('admin.ctrl', [
    '$scope', 'messageSvc', 'resumeSvc',
    //TODO split resume and messages into seperate pages/templates and controllers
    function($scope, messageSvc, resumeSvc) {

        getMessages();
        getResumes();

        //Delete message and refresh data
        $scope.deleteMsg = function(message) {
            messageSvc.deleteMessage(message._id).then(function(response) {
                getMessages();
            });
        };

        //Delete resume and refresh data
        $scope.deleteResume = function(resume) {
            resumeSvc.deleteResume(resume._id).then(function(response) {
                getResumes();
            });
        };

        function getMessages() {
            messageSvc.getMessages().then(function(response) {
                $scope.messages = response.data.data;
            });
        }

        function getResumes() {
            resumeSvc.getResumes().then(function(response) {
                $scope.resumes = response.data.data;
            });
        }
    }
]);