'use strict';
/* global Firebase */

// Create a new module for our app's services
// (Don't forget to reference this service as a dependency for our main app!)
var services = angular.module('nerdLibsApp.services', []);

// Add a factory to our service module
services.factory('templateService', function () {
  // Return all the properties and methods this service makes available
  return {
    // Create an empty object that will hold the current game's data
    game: {},

    // Create a method that will return all templates in the JSON
    getAllTemplates: function(){
      // Set the url or endpoint where the data exists
      var url = '';

      // Create an http request to fetch the data, using promises to trigger the callback
      $http.get(url).then(function(result){
      });
    },

    // Create a method to return a specific template (by ID) from the JSON
    getTemplateById: function(){
      // Set the url or endpoint where the data exists
      var url = '';

      // Create an http request to fetch the data, using promises to trigger the callback
      $http.get(url).then(function(result){
        // Set a null var that will hold our template data

        // Check that the ID is real and we actually have a template for that ID
        if(){
          //Set the data for the template
        }
        // Otherwise, redirect to 404 page...template does not exist for that ID
        else{
        }

        // Trigger the callback

      });
    },

    // Create a method that will return a template randomly
    getRandomTemplate: function(){
      // Set the url or endpoint where the data exists
      var url = '';

      // Create an http request to fetch the data, using promises to trigger the callback
      $http.get(url).then(function(result){
        // Set some vars to:
        // See how many templates exist in the JSON,
        // Pick a random number that's within the range of the total amount of templates we have,
        // Set the chosen template data to be returned


        // Trigger the callback

      });
    },

    // Create a method to do a quick check if results for a current game are ready
    isResultsReady: function(){
      // If we don't have any data at all, then return
      if (this.game === undefined){
        return false;
      }

      // If our model is an empty set, then return
      if(this.game === {}){
        return false;
      }

      // Otherwise, return the status of the game
      return this.game.resultsReady;
    }
  };
});

