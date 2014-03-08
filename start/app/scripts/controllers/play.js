'use strict';

// Reference your main wrapper app
var app = angular.module('nerdLibsApp');

// Chain a new controller for handling the play page
// Inject dependencies for $scope and other services you will need
app.controller('PlayCtrl', [
	function () {

		// Check if you have a template ID in your route
		if(){
			// If you do, call getTemplateById in your templateService, and pass it the ID
			// Also, pass it a callback that will take the data and set it to your $scope
		}
		// Otherwise, we don't have an ID
		else{
			// Call getRandomTemplate in your templateService
			// Pass it a callback that will take the data and set it to your $scope
		}

		// Add a method to the $scope that triggers a way to lock a word that is entered
		$scope.addWord = function(event, index){
			// Check if the key press was Enter or Tab. If not, then return
			if() {
			}
			// Check that the input field isn't empty. If it is, then return
			if(){
			}

			// Otherwise, we have a word! Set isLocked to true.


			// Set a var to know how many words are in the Nerd Libs total
			// And set another var for counting how many words are locked (start it at 0)


			// Create a check to know when all words are locked and the results are ready
			// For loop: for each word in libsTemplate...
			for(){
				// If the word is locked, increment the lockedCount
				if(){
				}
				// And if all the words are locked, tell our $scope
				if(){
				}
			}
		};

		// Add a method to trigger a way to view the results
		$scope.seeResults = function(event){
			if(){
				if() {
				}
			}
			// Persist all the words played by adding them to our templateService

			// Redirect to the results page
		};
	}

]);