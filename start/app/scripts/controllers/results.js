'use strict';

// Reference your main wrapper app
var app = angular.module('nerdLibsApp');

// Chain a new controller for handling game results
// Inject dependencies for $scope and other services you will need
app.controller('ResultsCtrl', [
	function() {

		// Check if there are results to even show
		// If not, redirect to the menu page to start playing!
		if(){
		}

		// Otherwise, we have some results. Bind them to the $scope

		
		// Add a method to the $scope that triggers a way to play again
		$scope.playAgain = function(){
			// Reset the model we're persisting in templateService

			// Redirect to the menu page to choose a new game!

		};
	}
]);
