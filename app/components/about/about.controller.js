angular.module('about')
    .controller('about.controller', ['$scope', '$state', function ($scope, $state) {
        console.log('inside about controller');
        $state.go('about.site');
    }])
    .controller('about.panel.controller', [function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    }]);
