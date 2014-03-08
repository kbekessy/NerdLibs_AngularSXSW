var angularTestApp = angular.module("demo_2_app", []);

angularTestApp .controller("demo_2_controller", function($scope){
	
	$scope.items = [
		{'name':'name 1', 'description':'sample description 1'},
	
		{'name':'name 2', 'description':'sample description 2'},
	
		{'name':'name 3', 'description':'sample description 3'}
	];

});
