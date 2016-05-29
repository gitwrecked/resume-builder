// appDirectives ===================
// use to create custom tags, repeatable functionality 
// that have scope of the enclosing controller
ngApp.directive('ngUserInfo', function() {
  return {
	// restrictions on how to call:
	// 'A' - <span ng-user-info></span>
	// 'E' - <ng-user-info></ng-user-info>
	// 'C' - <span class="ng-user-info"></span>
	// 'M' - <!-- directive: ng-user-info -->
	restrict: '', 
    template: '<div>Name: John Doe</div>'
  }
});