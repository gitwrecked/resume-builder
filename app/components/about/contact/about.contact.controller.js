angular.module('about').controller('about.contact.controller', ['$scope', 'aboutContactService', function ($scope, aboutContactService) {
    console.log('inside contact controller');

    this.contact = {};

    this.addMessage = function () {
        this.contact.date = Date.now();
        $scope.contact = this.contact;
        aboutContactService.saveComment(this.contact).then(function (resData) {
            $scope.response = resData;
        });
        this.contact = {};
        $scope.contactForm.$setPristine();
    };
}]);
