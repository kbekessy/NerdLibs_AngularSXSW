'use strict';

// Reference your main wrapper app
var app = angular.module('nerdLibsApp');

// Chain a new controller for handling the online play page
// Inject dependencies for $scope and other services you will need
app.controller('OnlineCtrl', ['$scope', '$routeParams', '$location', '$firebase', 'templateService', 'firebaseService',
  function ($scope, $routeParams, $location, $firebase, templateService, firebaseService) {

    // Create an empty array to queue up words for Firebase
    $scope.local =[];

    // Add our Firebase reference to the $scope
    $scope.fbPlay = firebaseService;
    
    // Bind Firebase to our local libsTemplate $scope...we're alive!!!
    var firebasePromise = $scope.fbPlay.$bind($scope, 'libsTemplate');

    // Watch the $scope to check when libsTemplate.resultsReady is set to true
    $scope.$watch('libsTemplate.resultsReady', function(ready) {
      // if true, unbind (disconnect) our Firebase instance
      if (ready){
        firebasePromise.then(function(unbind){
          unbind();
          // Persist our libsTemplate data in our templateService
          templateService.game = $scope.libsTemplate;
          // Redirect to the online results page
          $location.path('/online-results');
        });
      }
    }, true);


    // Add a method to the $scope that triggers a way to lock a word that is entered
    $scope.addWord = function(event, index){

      // Check if the key press was Enter or Tab. If not, then return
      if(event.keyCode !== 13 ) {
        return;
      }
      // Check that the input field isn't empty. If it is, then return
      if($scope.local[index] === undefined){
        return;
      }
      // Check that if the word is not locked...
      if($scope.local[index].isLocked){
        return;
      }

      // Otherwise, we have a word! Set isLocked to true.
      $scope.libsTemplate.words[index].isLocked = true;
      $scope.libsTemplate.words[index].word = $scope.local[index];

      // Set a var to know how many words are in the Nerd Libs total
      // And set another var for counting how many words are locked (start it at 0)
      var totalWords = Object.keys($scope.libsTemplate.words).length,
        lockedCount = 0;

      // Create a check to know when all words are locked and the results are ready
      // For loop: for each word in libsTemplate...
      for(var i = 0; i < totalWords; i++){
        // If the word is locked, increment the lockedCount
        if($scope.libsTemplate.words[i].isLocked === true){
          lockedCount ++;
        }
        // And if all the words are locked, tell our $scope
        if(lockedCount === totalWords){
          $scope.libsTemplate.resultsReady = true;
        }
      }
    };
  }
]);