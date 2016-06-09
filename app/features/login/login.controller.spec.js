describe('login.controller', function() {
    var controller, scope;
    beforeEach(module('login.controller'));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('login.controller', { $scope: scope });
    }));

    it('test name here', function() {
        true
    });
});