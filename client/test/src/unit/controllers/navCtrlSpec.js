// nav controller unit test ===================
// angular unit test to validate controller logic and methods
describe('navCtrl', function() {

    beforeEach(angular.mock.module('rbApp'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.isAdmin', function() {
        it('test user is admin', function() {
            var $scope = {};

            var controller = $controller('navCtrl', {
                $scope: $scope
            });

            $scope.currentUser = {
                // "_id": ObjectId("578d28fa51dc870403cae33a"),
                "email": "test@test.com",
                "admin": true
            };

            var response = $scope.isAdmin();
            expect(responsee).toBe(true);
        });
    });

    it('test', function() {
        console.log('navCtrl: add a test!');
    });
});