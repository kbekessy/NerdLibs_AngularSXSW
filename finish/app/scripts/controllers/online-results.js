'use strict';

// Reference your main wrapper app
var app = angular.module('nerdLibsApp');

// Chain a new controller for handling the online results page
// Inject dependencies for $scope and other services you will need
app.controller('OnlineResultsCtrl', ['$scope', '$location', '$firebase', 'firebaseService', 'templateService',
	function($scope, $location, $firebase, firebaseService, templateService) {

    // Call templateService.isResultsReady to see if we actually have results for this game
    // If results aren't ready, redirect to the online game
    if(!templateService.isResultsReady()){
      $location.path('/online');
    }
    // Otherwise, we ahve results. Get them from templateService.game and bind them to the $scope
    else {
      $scope.template = templateService.game;
    }

    // Add our Firebase reference to the $scope
    $scope.fbPlay = firebaseService;
    // Bind Firebase to our local libsTemplate $scope...we're alive!!!
    var firebasePromise = $scope.fbPlay.$bind($scope, 'libsTemplate');

    // Watch the $scope to see if results get reset somehow
    // This may happen if a remote player decides to start a new game
    $scope.$watch('libsTemplate.resultsReady', function(ready) {
      if (ready === undefined){
        return;
      }
      // If a new game is started, unbind Firebase, reset templateService.game, and redirect to online play page
      if (!ready){
        firebasePromise.then(function(unbind){
          unbind();
          templateService.game = {};
          $location.path('/online');
        });
      }
    }, true);

  }
]);