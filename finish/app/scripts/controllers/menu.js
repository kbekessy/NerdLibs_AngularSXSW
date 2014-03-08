'use strict';

// Reference your main wrapper app
var app = angular.module('nerdLibsApp');

// Chain a new controller for handling the online results page
// Inject dependencies for $scope and other services you will need
app.controller('MenuCtrl', ['$scope', 'templateService',
	function($scope, templateService) {
		// Get all templates from our service and bind them to the $scope
		templateService.getAllTemplates(function(data){
			$scope.libsTemplates = data;
		});
	}
]);
