// register controller unit test ===================
// angular unit test to validate controller logic and methods
describe('register.controller', function() {
    var controller, scope;
    beforeEach(module('register.module'));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('register.controller', { $scope: scope });
    }));

    it('test', function() {
        console.log('register.controller: add a test!');
    });
});