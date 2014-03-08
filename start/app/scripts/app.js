'use strict';

// Create our app! Name it  'nerdLibsApp', and inject all the dependencies the app will rely on
var app = angular.module('nerdLibsApp', ['ngRoute']);

// Configure the app with your routes by injecting $routeProvider
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      // Root of your app goes to the menu page
      .when('/', { })
      // Create route for the menu page
      .when('/menu', { })
      // Create route for the play page
      .when('/play', { })
      // Create route for the play page with an ID for a specific Nerd Lib
      .when('/play/:id', { })
      // Create  route for showing results of the game
      .when('/results', { })
      // Create route for showing results of online game
      .when('/404', { })
      // When no other route matches, go to 404 page
      .otherwise({
        redirectTo: '/404'
      });
  }]);
