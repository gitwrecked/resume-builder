// upload controller unit test ===================
// angular unit test to validate controller logic and methods
describe('upload.controller', function() {
    var controller, scope;
    beforeEach(module('upload.module'));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('upload.controller', { $scope: scope });
    }));

    it('test', function() {
        console.log('upload.controller: add a test!');
    });
});